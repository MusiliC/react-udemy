/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Progress = ({ i, numQuestions, points, maxPoints, answer }) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={i + Number(answer != null)} />

      <p>
        Question <strong>{i + 1}</strong>/ {numQuestions}
      </p>

      <p>
        Points <strong>{points}</strong>/{maxPoints}
      </p>
    </header>
  );
};

export default Progress;
