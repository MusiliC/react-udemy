/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ServiceCard = ({ service }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="font-semibold text-lg">{service.title}</h2>
      {isShow ? (
        <>
          <p className="mt-3">{service.body}</p>
          <p className="mt-2 text-white cursor-pointer bg-blue-600" onClick={() => setIsShow(show => !show)}>Show less..</p>
        </>
      ) : (
        <>
          {/* <p className="mt-3">{service.body.slice(0, 10)}</p> */}
           <p className="mt-2 text-white cursor-pointer bg-blue-600" onClick={() => setIsShow(show => !show)}>Show More..</p>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
