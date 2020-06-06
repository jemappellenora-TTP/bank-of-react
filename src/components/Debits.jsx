import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AccountBalance from './AccountBalance';

// Viewing the Account Balance on the Debits page:

// GIVEN I am on the Debits page
// WHEN I view the Account Balance display area
// THEN I should see my Account Balance displayed

class Debits extends Component {
    constructor(){
        super();
        this.state={
            displayBalance: false,
            debitsInfo: [],
            found: false,
        }

   }
   componentDidMount(){
        //where we pass info to the API call
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
    displayBalance=()=>{
        this.state.displayBalance?this.setState({displayBalance: false }):this.setState({displayBalance: true })
    }
    render() {
        const items = [];
        if (this.state.found){ 
            for(let i = 0; i < this.state.debitsInfo.length; i++){
                items.push(
                    <div key={i}>
                        <h5>Debitcard #{i}</h5>
                        <p>
                            <li>{this.state.debitsInfo[i].description} </li>
                            <li>{this.state.debitsInfo[i].amount} </li>
                            <li>{this.state.debitsInfo[i].date} </li>
                        </p>
                    </div>)
            }
        }
        
        return (
             <div>
                 <h1>Debits</h1>
                 <button onClick={this.displayBalance}>Display Balance</button>
                 <Link to="/">Back to Home</Link>
                    {(this.state.displayBalance)?<AccountBalance accountBalance="1600"/>:""} 
                    {items}
                    
                 {/* Debits: {accountBalance} */}
                 {/* Balance: {this.props.accountBalance} */}
                
             </div>
         );
     }
}

export default Debits;