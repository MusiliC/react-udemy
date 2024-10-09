/* eslint-disable no-unused-vars */
import accountReducer from "./features/accounts/accountSlice"
import customerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";

import { applyMiddleware, combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
