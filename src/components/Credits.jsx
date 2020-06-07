import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AccountBalance from './AccountBalance';
import AddCreditsForm from './AddCreditsForm'


class Credits extends Component {
    constructor(){
        super();
        this.state={
            displayBalance: false,
            addCredits: false,
            creditsInfo: [],
            found: false,
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
    }
    
    displayBalance=()=>{
        this.state.displayBalance?this.setState({displayBalance: false }):this.setState({displayBalance: true })
    }

    addCredits=()=>{
        this.state.addCredits?this.setState({addCredits: false }):this.setState({addCredits: true })
    }

    render() {
        const items = [];
        let creditsSum= 0;
        let totalCards= this.state.creditsInfo.length
        if (this.state.found){ 
            for(let i=totalCards-1; i>=0;i--){
            // for(let i = 0; i < totalCards; i++){
                creditsSum= creditsSum+ this.state.creditsInfo[i].amount;
                items.push(
                    <div key={i}>
                        <h5>Creditcard #{i+1}</h5>
                        <p>
                            <li>{this.state.creditsInfo[i].description} </li>
                            <li>{this.state.creditsInfo[i].amount} </li>
                            <li>{this.state.creditsInfo[i].date} </li>
                        </p>
                    </div>)
            }
        }
        
        return (
             <div>
                 <h1>Credits</h1>
                 <Link to="/">Back to Home</Link>
                 <button onClick={this.displayBalance}>Display Balance</button>
                    {(this.state.displayBalance)?<AccountBalance creditsSum={creditsSum}/>:""} 
                 
                 <button onClick={this.addCredits}>Add Card</button>
                    {(this.state.addCredits)?<AddCreditsForm currentCards={this.state.creditsInfo}/>:""} 

                 {items}
                    
                    
                 {/* Debits: {accountBalance} */}
                 {/* Balance: {this.props.accountBalance} */}
                
             </div>
         );
     }
}

export default Credits;