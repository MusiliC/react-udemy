/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useQuiz } from "../context/QuizContext";

const Progress = () => {

const { numQuestions, points, maxPoints, answer, index } = useQuiz();

  
  return (
    <header className="progress">
      <progress max={numQuestions}  value={index + (answer != null ? 1 : 0)} />

      <p>
        Question <strong>{index + 1}</strong>/ {numQuestions}
      </p>

      <p>
        Points <strong>{points}</strong>/{maxPoints}
      </p>
    </header>
  );
};

export default Progress;
