import { createStore, combineReducers } from 'redux';
import userInfo from '../reducers/loginReducer';
import emailAuthReducer from '../reducers/emailAuthReducer.js';
const initialState = {};

const rootReducer = combineReducers({
  userInfo, emailAuthReducer
});

const store = createStore(rootReducer, initialState);

export default store;
