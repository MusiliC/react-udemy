/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const FinishedScreen = ({ points, maxPoints , highScore, dispatch}) => {
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
