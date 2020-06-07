import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "./App.css"
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import LogIn from './LogIn'
import Debits from './components/Debits'
import Credits from './components/Credits'

class App extends Component {
  constructor(){
    super();
    this.state = {
      accountBalance:{
        debits:"",
        credits:"",
      },
      currentUser:{
        userName:'bob-loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  mockLogIn=(logInInfo)=>{
    const newUser={...this.state.currentUser} //inherate attributes of this.state.currentUser
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  
  render() {
    const HomeComponent=()=>(<Home debits={this.state.accountBalance.debits} credit={this.state.accountBalance.credits}/>);
    // const HomeComponent=()=>(<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent=()=>(<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>);
    const LogInComponent=()=>(<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn}{...this.props}/>)
    const DebitsComponent=()=>(<Debits debits={this.state.accountBalance.debits}/>)
    const CreditsComponent=()=>(<Credits credits={this.state.accountBalance.credits}/>)
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