import constants from './../c/constants'

const initialState = {
  balance:0
}

const bankReducer = (state, action) =>{
  console.log(action);
  switch (action.type) {
    case constants.CREATE_ACCOUNT:
      return initialState;

    case constants.DEPOSIT_INTO_ACCOUNT:
      return {balance: state.balance + parseFloat(action.amount)};

    case constants.WITHDRAW_FROM_ACCOUNT:
      return {balance: state.balance - parseFloat(action.amount)};

    default:
      return state;
  }
}

export default bankReducer;
