/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "../shared/Button";

const AccordionItem = ({ item, currOpen, setCurrOpen }) => {
  const isShow = item?.id === currOpen;

  const toggleClick = () => {
    setCurrOpen(isShow ? null : item.id);
  };

  return (
    <div className="p-4 bg-gray-100 my-3 rounded-md">
      <h2 className="font-semibold text-lg">{item.title}</h2>

      {isShow ? (
        <>
          <p className="my-3">{item.body}</p>
          <div className="flex items-center justify-center">
            <Button toggleClick={toggleClick}>Show less</Button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <Button toggleClick={toggleClick}>Show More</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default AccordionItem;
