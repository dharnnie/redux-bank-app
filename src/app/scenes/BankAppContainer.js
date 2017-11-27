import React,{Component} from 'react'
import constants from './../redux/c/constants'
import bankStore from './../redux/s/bankStore'
import BankApp from './BankApp'


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
  /*
  Initializes an empty account state with zero balance
  as soon as component mounts 0  |  returns an subscribtion object
  we then save to this.unsubscribe 
  */
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

export default BankApp;
