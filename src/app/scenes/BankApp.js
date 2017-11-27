import React,{Component} from 'react'
import PropTypes from 'prop-types'


class BankApp extends Component{
  handleDeposit(){
    this.props.onDeposit(this.refs.amount.value);// call the onDeposit function from props
    this.refs.amount.value = ''; // onClick, empty the input field
  }
  handleWithdraw(){
    this.props.onWithdraw(this.refs.amount.value);// call the onWithdraw function from props
    this.refs.amount.value = ''; // onClick, empty the input field
  }
  render(){
    return(
      <div>
        <header>
          <img src='' alt='bank logo'/>Gang Trust Bank
        </header>
        <h1>Your balance is ${this.props.balance}</h1>
        <div class="atm">
          <input type="text" placeholder="Amount" ref="amount"/>
          <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
          <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
        </div>
      </div>
    );
  }
};
BankApp.propTypes = {
  balance: PropTypes.number,
  onDeposit: PropTypes.func,
  onWithdraw: PropTypes.func
};
export default BankApp;
