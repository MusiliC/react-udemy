/* eslint-disable no-unused-vars */
const initialStateCustomer = {
  name: "",
  id: "",
  createdAt: "",
};



export default function customerReducer(state = initialStateCustomer, action) {
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

export function createCustomer(name, id) {
  return {
    type: "customer/createCustomer",
    payload: {
      name,
      id,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateName(name) {
  return {
    type: "customer/updateName",
    payload: {
      name,
    },
  };
}