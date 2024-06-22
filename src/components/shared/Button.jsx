/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Button = ({ toggleClick, children }) => {
  return (
    <div className="bg-blue-500 rounded-md text-center p-2  cursor-pointer text-white" onClick={toggleClick} >
      {children}
    </div>
  );
};

export default Button;
