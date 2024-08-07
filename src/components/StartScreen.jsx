/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to react Quiz</h2>
      <h3>{numQuestions} questions to test your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets Start
      </button>
    </div>
  );
};

export default StartScreen;
