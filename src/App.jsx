/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import MyMain from "./MyMain";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    default:
      throw new Error("Action is unknown");
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchQuestions = async () => {
    const res = await fetch("http://localhost:3000/questions");
    const data = await res.json();
    dispatch({
      type: "dataReceived",
      payload: data,
    });
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="App">
      <Header />
      <MyMain></MyMain>
    </div>
  );
};

export default App;
