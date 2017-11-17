import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import constants from './redux/c/constants'
import bankStore from './redux/s/bankStore'

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
        <h1>Your balance is ${this.props.balance.toFixed(2)}</h1>
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

class BankAppContainer extends Component {
  constructor(...args) {
    super(...args);
    bankStore.dispatch({type: constants.CREATE_ACCOUNT})// dispatches a CREATE_ACCOUNT action type
    this.state={
      balance: bankStore.getState().balance// Gets current balance from the store
    }
    /*
    We should be able to do this as well
    this.state = bankStore.getState() ? Perhaps. I'll test and see what I get
    */
  }
  componentDidMount(){
    this.unsubscribe = bankStore.subscribe(()=>
      this.setState({balance: bankStore.getState().balance})
    )
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  render(){
    return(
      <BankApp
        balance = {bankStore.getState().balance}
        onDeposit={(amount)=>bankStore.dispatch(
          {type: constants.DEPOSIT_INTO_ACCOUNT, amount:amount}
        )}
        onWithdraw={(amount)=>bankStore.dispatch(
          {type:constants.WITHDRAW_FROM_ACCOUNT, amount:amount}
        )}
      />
    );
  }
}
ReactDOM.render(<BankAppContainer/>, document.getElementById("root"));
