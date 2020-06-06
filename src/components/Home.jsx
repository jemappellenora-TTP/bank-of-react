import React, { Component } from 'react';
import AccountBalance from './AccountBalance'
    
class Home extends Component {
    render() {
        return (
            <div>
              <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2015-08/28/full/1440706704-1419.jpg" alt="bank"/>
              <h1>Bank of React</h1>

              <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
    }
}
    
export default Home;