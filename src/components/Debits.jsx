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

    addDebits=()=>{
        this.state.addDebits?this.setState({addDebits: false }):this.setState({addDebits: true })
    }

    render() {
        const items = [];
        let debitsSum= 0;
        let totalCards= this.state.debitsInfo.length
        if (this.state.found){ 
            for(let i=totalCards-1; i>=0;i--){
            // for(let i = 0; i < totalCards; i++){
                debitsSum= debitsSum+ this.state.debitsInfo[i].amount;
                items.push(
                    <div key={i}>
                        <h5>Debitcard #{i+1}</h5>
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
                 <Link to="/">Back to Home</Link>
                 <button onClick={this.displayBalance}>Display Balance</button>
                    {(this.state.displayBalance)?<AccountBalance debitsSum={debitsSum}/>:""} 
                 
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