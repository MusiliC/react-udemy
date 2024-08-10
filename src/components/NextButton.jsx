/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const NextButton = ({ dispatch, answer, i, numQuestions }) => {
  if (answer == null) return null;
  if (i < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    );

    if (i == numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "finish" });
        }}
      >
        Finish
      </button>
    );
};

export default NextButton;
