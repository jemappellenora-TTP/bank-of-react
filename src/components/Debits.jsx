import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// AND I should see a title of 'Debits' on the page
// GIVEN I am on the Debits page
// WHEN I view the Debits display area
//      THEN I should see all of my debits displayed
//      AND each Debit should display a Debit description
//      AND each Debit should display a Debit amount
//      AND each Debit should display a Debit date
class Debits extends Component {
    constructor(){
        super();
        this.state={
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
                 <Link to="/">Back to Home</Link>
                    {items}
                 {/* Debits: {accountBalance} */}
                 {/* Balance: {this.props.accountBalance} */}
                
             </div>
         );
     }
}

export default Debits;