/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from "./Button.module.css"

const Button = ({children, onClick, type}) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
        {children}
    </button>
  )
}

export default Button