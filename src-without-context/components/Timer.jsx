/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const Timer = ({ dispatch, secRemaining }) => {
  const mins = Math.floor(secRemaining / 60);

  const seconds = secRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tik" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {" "}
      {mins < 10 && "0"} {mins} mins {seconds < 10 && "0"} {seconds} seconds
    </div>
  );
};

export default Timer;
