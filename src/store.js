/* eslint-disable no-unused-vars */

import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  name: "",
  id: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case "account/withdrawal":
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}


function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdrawal(amount) {
  return { type: "account/withdrawal", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

function payLoan() {
  return { type: "account/payLoan" };
}



function createCustomer(name, id) {
  return {
    type: "customer/createCustomer",
    payload: {
      name,
      id,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateName(name) {
  return {
    type: "customer/updateName",
    payload: {
      name,
    },
  };
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return {
        ...state,
        name: action.payload.name,
      };


    default:
      return state;
  }
}



const rootReducer = combineReducers({
 account:  accountReducer,
 customer:  customerReducer
});

const store = createStore(rootReducer);



store.dispatch(createCustomer("Musili", "100200"));

store.dispatch(deposit(500));
store.dispatch(withdrawal(200));
store.dispatch(requestLoan(1000, "Buy a car"));
store.dispatch(payLoan());

console.log(store.getState());
