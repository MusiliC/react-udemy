/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

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

function QuizProvider({ children }) {
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
    <QuizContext.Provider
      value={{
      questions,
      status,
      index,
      answer,
      points,
      highScore,
      secRemaining,
      maxPoints,
      numQuestions,
      dispatch
    }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);

  if (context === undefined)
    throw new Error("Quiz context was used outside quiz provider");
  return context;
}

export { QuizProvider, useQuiz };
