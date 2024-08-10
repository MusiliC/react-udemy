/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MyMain from "./components/MyMain";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
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

    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    default:
      throw new Error("Action is unknown");
  }
}

const App = () => {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0 )

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
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}

        {status === "active" && (
          <>
            <Progress i={index} numQuestions={numQuestions} answer={answer} maxPoints = {maxPoints} points={points} />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </MyMain>
    </div>
  );
};

export default App;
