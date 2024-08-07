/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MyMain from "./components/MyMain";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
  index:0
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

    case "start":
      return {
        ...state,
        status: "active",
      };

    default:
      throw new Error("Action is unknown");
  }
}

const App = () => {
  const [{ questions, status, index }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  const fetchQuestions = async () => {
    try {
      const res = await fetch("http://localhost:3000/questions");
      const data = await res.json();
      dispatch({
        type: "dataReceived",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "dataFailed",
      });
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="App">
      <Header />
      <MyMain>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}

        {status === "active" && <Question question = {questions[index]} />}
      </MyMain>
    </div>
  );
};

export default App;
