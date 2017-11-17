import {createStore} from 'redux'
import bankReducer from './../r/bankReducer'

const bankStore = createStore(bankReducer);
export default bankStore;
