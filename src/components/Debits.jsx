import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AccountBalance from './AccountBalance';
import AddDebitsForm from './AddDebitsForm'


class Debits extends Component {
    constructor(){
        super();
        this.state={
            displayBalance: false,
            addDebits: false,
            found: true,
        }

   }

    displayBalance=()=>{
        this.state.displayBalance?this.setState({displayBalance: false }):this.setState({displayBalance: true })
    }

    addDebits=()=>{
        this.state.addDebits?this.setState({addDebits: false }):this.setState({addDebits: true })
    }

    render() {
        const creditsSum = this.props.creditsSum;
        const items = [];
        let debitsSum= 0;
        let totalCards= [...this.props.debits].length
        if (this.state.found){ 
            for(let i=totalCards-1; i>=0;i--){
            // for(let i = 0; i < totalCards; i++){
                debitsSum= debitsSum+ this.props.debits[i].amount;
                items.push(
                    <div key={i}>
                        <h5>Debitcard #{i+1}</h5>
                        <p>
                            <li>{this.props.debits[i].description} </li>
                            <li>{this.props.debits[i].amount} </li>
                            <li>{this.props.debits[i].date} </li>
                        </p>
                    </div>)
            }
        }
        
        return (
             <div>
                 <h1>Debits</h1>
                 <Link to="/">Back to Home</Link>
                 <button onClick={this.displayBalance}>Display Balance</button>
                    {(this.state.displayBalance)?<AccountBalance debitsSum={debitsSum} creditsSum={creditsSum}/>:""} 
                 
                 <button onClick={this.addDebits}>Add Card</button>
                    {(this.state.addDebits)?<AddDebitsForm currentCards={this.state.debitsInfo}/>:""} 
                {items}
                    
                    
                 {/* Debits: {accountBalance} */}
                 {/* Balance: {this.props.accountBalance} */}
                
             </div>
         );
     }
}

export default Debits;