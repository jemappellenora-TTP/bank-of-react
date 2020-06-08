import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class AddCreditsForm extends Component {
    constructor () {
        super()
        this.state = {
            creditsInfo : {
                description: "",
                amount: 0,
                date: "2020-06-20 T15:36:09.609Z"
            },
            redirect:false,
        }
      }
    handleChange=(event)=>{
        const updatedCard = {...this.state.creditsInfo}
        const inputField = event.target.name
        const inputValue = event.target.value
        updatedCard[inputField] = inputValue
        this.setState({creditsInfo: updatedCard})
      }

    updateCurrentCard = (event) => {
        event.preventDefault()
        const allCards=this.props.currentCards
        allCards.push(this.state.creditsInfo)
        this.props.update(allCards)
        this.setState({redirect: true});
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/Credits"/>)
            //if the form is filled we will be redirected to our userProfile Page
          }
        return (
            <div>
                <form onSubmit={this.updateCurrentCard}>
                    <div>
                        <label>Add new Credit description</label>
                        <input type="text" name="description" className="creditsInfo" placeholder="description..." onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Add newCredit amount</label>
                        <input type="number" name="amount" className="creditsInfo" placeholder="amount..." onChange={this.handleChange} />
                    </div>
                    <button>Add Card</button>
                </form>
            </div>
    
        );
    }
}

export default AddCreditsForm;