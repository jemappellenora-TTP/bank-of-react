import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class AddDebitsForm extends Component {
    constructor () {
        super()
        this.state = {
            debitsInfo : {
                description: "",
                amount: 0,
                date: "2020-06-20 T15:36:09.609Z"
            },
            redirect:false,
        }
      }
    handleChange=(event)=>{
        const updatedCard = {...this.state.debitsInfo}
        const inputField = event.target.name
        const inputValue = event.target.value
        updatedCard[inputField] = inputValue
        this.setState({debitsInfo: updatedCard})
      }

    updateCurrentCard = (event) => {
        event.preventDefault()
        const allCards=this.props.currentCards
        allCards.push(this.state.debitsInfo)
        this.props.update(allCards)
        this.setState({redirect: true});
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
                        <label>Add new Debits description</label>
                        <input type="text" name="description" className="debitsInfo" placeholder="description..." onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Add newDebits amount</label>
                        <input type="number" name="amount" className="debitsInfo" placeholder="amount..." onChange={this.handleChange} />
                    </div>
                    <button>Add Card</button>
                </form>
            </div>
    
        );
    }
}

export default AddDebitsForm;