import { createStore, combineReducers } from 'redux';
import userInfo from '../reducers/loginReducer';

const initialState = {};

const rootReducer = combineReducers({
  userInfo,
});

const store = createStore(rootReducer, initialState);

export default store;
