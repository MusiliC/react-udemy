/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer != null;
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          className={`btn btn-option ${i == answer ? "answer" : ""} ${
            hasAnswered
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
