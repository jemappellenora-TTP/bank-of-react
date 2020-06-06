import React, {Component} from 'react';
// Making the Account Balance dynamic:

// GIVEN I am on any page displaying the Account Balance
// WHEN I view the Account Balance display area
// THEN I should see an Account Balance that accurately represents my Debits subtracted from my Credits
//      Account Balance = Debit - Credits
// AND I should be able to see a negative account balance if I have more Debits than Credits
class AccountBalance extends Component {
    constructor(props){
        super(props);
        this.state={
            accountBalance: 0,
        }
    }
    render() {
        // let Debits = this.props.Debits
        // let Credits = this.props.Credits
        // const accountBalance = Debits-Credits;
        const Balance= this.props.accountBalance;
        return (
            <div>
                {/* Balance: {accountBalance} */}
                {/* Balance: {this.props.accountBalance} */}
                Account Balance: {Balance}
            </div>
        );
    }
}

export default AccountBalance;