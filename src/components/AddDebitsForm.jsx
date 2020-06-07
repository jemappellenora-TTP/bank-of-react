import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
// Adding debits:

// GIVEN I am on the Debits page
// WHEN I enter a new Debit description
// AND WHEN I enter a new Debit amount
// AND WHEN I click 'Add Debit'
// THEN I should see my new debit added to the Debits display area with the current date
// AND I should see my Account Balance updated to reflect the new Debit

//need to sum up all debit cards balance
//add form that let user input amount 

class AddDebitsForm extends Component {
    constructor () {
        super()
        this.state = {
            debitsInfo : {
                description: "",
                amount: 0,
                date: "2020-06-20 T15:36:09.609Z"
            },
            totalDebits:[],
            redirect: false
        }
      }
    handleChange=(event)=>{
        const updatedCard = {...this.state.debitsInfo}
        const inputField = event.target.name
        const inputValue = event.target.value
        updatedCard[inputField] = inputValue
        this.setState({debitsInfo: updatedCard})
      }

    updateCurrentCard = (e) => {
        e.preventDefault()
        const updateDebits = this.props.currentCards;
        updateDebits.push(this.state.debitsInfo);
        
        this.setState({redirect: true});
        this.setState({debitsInfo:updateDebits})
        this.setState({date: new Date().toLocaleString()})
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/Debits"/>)
            //if the form is filled we will be redirected to our userProfile Page
          }
        return (
            <div>
                <form onSubmit={this.updateCurrentCard}>
                    <div>
                        <label>Add new Debit description</label>
                        <input type="text" name="description" className="debitsInfo" placeholder="description..." onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Add new Debit amount</label>
                        <input type="number" name="amount" className="debitsInfo" placeholder="amount..." onChange={this.handleChange} />
                    </div>
                    <button>Add Card</button>
                </form>
            </div>
    
        );
    }
}

export default AddDebitsForm;