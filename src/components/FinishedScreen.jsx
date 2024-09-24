/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useQuiz } from "../context/QuizContext";

const FinishedScreen = () => {

  const { points, maxPoints , highScore, dispatch} = useQuiz();

  const percentage = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points} </strong> out of{" "}
        <strong>{maxPoints}</strong>({Math.ceil(percentage)}%){" "}
      </p>
      <p className="highScore">
        (HighScore: {highScore} points)
      </p>

          <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishedScreen;
