import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "./App.css"
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import LogIn from './LogIn'
import Debits from './components/Debits'
import Credits from './components/Credits'
import axios from "axios"

class App extends Component {
  constructor(){
    super();
    this.state = {
      creditsInfo:[],
      debitsInfo: [],
      currentUser:{
        userName:'Dummy User',
        memberSince: '08/23/99',
      }
    }
  }
  
  componentDidMount(){
    //where we pass info to the API call
   axios
      .get(`https://moj-api.herokuapp.com/credits`)
        .then(response=> {
           const data = response.data;
           const newCreditsInfo = [];
           for(let i=0; i<data.length;i++){
               newCreditsInfo.push(data[i])
           }
            this.setState({creditsInfo: newCreditsInfo});
            this.setState({found:true});
        })
        .catch(err=>console.log(err))

  axios
    .get(`https://moj-api.herokuapp.com/debits`)
      .then(response=> {
        const data = response.data;
        const newDebitsInfo = [];
           for(let i=0; i<data.length;i++){
               newDebitsInfo.push(data[i])
           }
            this.setState({debitsInfo: newDebitsInfo});
            this.setState({found:true});
        })
        .catch(err=>console.log(err))
  
  }


  mockLogIn=(logInInfo)=>{
    const newUser={...this.state.currentUser} //inherate attributes of this.state.currentUser
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  
  render() {
    let creditsSum= 0;
    let debitsSum= 0;
    
    for(let i=0; i<this.state.creditsInfo.length;i++){
      creditsSum= creditsSum+ this.state.creditsInfo[i].amount;
    }
    for(let i=0; i<this.state.debitsInfo.length;i++){
      debitsSum= debitsSum+ this.state.debitsInfo[i].amount;
    }

    const HomeComponent=()=>(<Home/>);
    // const HomeComponent=()=>(<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent=()=>(<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>);
    const LogInComponent=()=>(<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn}{...this.props}/>)
    const DebitsComponent=()=>(<Debits debits={this.state.debitsInfo} creditsSum={creditsSum}/>)
    const CreditsComponent=()=>(<Credits credits={this.state.creditsInfo} debitsSum={debitsSum}/>)
    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/Debits" render={DebitsComponent}/>
          <Route exact path="/Credits" render={CreditsComponent}/>
        </div>    
      </Router>
    );
  }
}

export default App;