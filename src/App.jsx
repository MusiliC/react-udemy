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
import FinishedScreen from "./components/FinishedScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secRemaining: null,
};

let SEC_PER_QUESTION = 30;

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
        //secRemaining: 10,
         secRemaining: state.questions.length * SEC_PER_QUESTION,
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

    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    case "restart":
      return {
        ...state,
        points: 0,
        highScore: 0,
        index: 0,
        answer: null,
        status: "ready",
      };

    case "tik":
      return {
        ...state,
        secRemaining: state.secRemaining - 1,
        status: state.secRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Action is unknown");
  }
}

const App = () => {
  const [
    { questions, status, index, answer, points, highScore, secRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  let numQuestions = questions.length;
  let maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

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
            <Progress
              i={index}
              numQuestions={numQuestions}
              answer={answer}
              maxPoints={maxPoints}
              points={points}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secRemaining={secRemaining} />
              <NextButton
                dispatch={dispatch}
                i={index}
                numQuestions={numQuestions}
                answer={answer}
              />
            </Footer>
          </>
        )}

        {status === "finished" && (
          <FinishedScreen
            maxPoints={maxPoints}
            points={points}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </MyMain>
    </div>
  );
};

export default App;
