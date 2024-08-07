/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Options = ({question}) => {
  return (
    <div className="options">
        {
            question.options.map((option) => (
                <button className='btn btn-option' key={option}>{option}</button>
            ))
        }
    </div>
  )
}

export default Options