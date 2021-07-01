import { createStore, combineReducers } from "redux";
import userInfo from "reducers/loginReducer";
import emailAuthReducer from "reducers/emailAuthReducer.js";
import profile from "reducers/profileReducer";
const initialState = {};

const rootReducer = combineReducers({
  userInfo,
  emailAuthReducer,
  profile,
});

const store = createStore(rootReducer, initialState);

export default store;
