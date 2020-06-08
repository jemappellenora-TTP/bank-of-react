import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AccountBalance from './AccountBalance';
import AddCreditsForm from './AddCreditsForm'

class Credits extends Component {
    constructor(){
        super();
        this.state={
            allCredits:[],
            displayBalance: false,
            addCredits: false,
            found: true,
        }

   }

    displayBalance=()=>{
        this.state.displayBalance?this.setState({displayBalance: false }):this.setState({displayBalance: true })
    }

    addCredits=()=>{
        this.state.addCredits?this.setState({addCredits: false }):this.setState({addCredits: true })
    }

    updateCredits=()=>{
        const intCards= this.props
        this.setState({allCredits: intCards})
    }

    render() {
        const debitsSum = this.props.debitsSum;
        const items = [];
        let creditsSum= 0;
        let totalCards= [...this.props.credits].length
        if (this.state.found){ 
            for(let i=totalCards-1; i>=0;i--){
                creditsSum= creditsSum+ this.props.credits[i].amount;
                console.log(creditsSum)
                items.push(
                    <div key={i}>
                        <h5>Creditcard #{i+1}</h5>
                        <p>
                            <li>{this.props.credits[i].description} </li>
                            <li>{this.props.credits[i].amount} </li>
                            <li>{this.props.credits[i].date} </li>
                        </p>
                    </div>)
            }
        }
        return (
             <div>
                 <h1>Credits</h1>
                 <Link to="/">Back to Home</Link>
                 <button onClick={this.displayBalance}>Display Balance</button>
                    {(this.state.displayBalance)?<AccountBalance debitsSum={debitsSum} creditsSum={creditsSum}/>:""} 
                 
                 <button onClick={this.addCredits}>Add Card</button>
                    {(this.state.addCredits)?<AddCreditsForm currentCards={this.props.credits} update={this.updateCredits}/>:""} 
                {items}
                 
                    
                    
                 {/* Debits: {accountBalance} */}
                 {/* Balance: {this.props.accountBalance} */}
                
             </div>
         );
     }
}

export default Credits;