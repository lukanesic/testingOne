import React from 'react'

const Button = ({ txt, onClick }) => {
  return <button onClick={onClick}>{txt}</button>
}

export default Button
