import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2015-08/28/full/1440706704-1419.jpg" alt="bank"/>
          <h1>Bank of React</h1>
          <Link to="/Debits">Debits</Link>
          <br/>
          <Link to="/Credits">Credits</Link>
          <br/>
          <Link to="/userProfile">User Profile</Link>
          <br/>
          <Link to="/LogIn">Login to Your Account</Link>
          <p/>
          <div>Account Balance: <AccountBalance debitsSum={this.props.debits} creditsSum={this.props.credits}/></div>
        </div>
    );
  }
}

export default Home;