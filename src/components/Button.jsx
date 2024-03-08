import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({label, action, variant }) => {
  return (
    <Link to='' onClick={action} className={`inline-flex center px-4 py-2 rounded-lg
      ${variant === 'primary' && 'bg-primary'},
      ${variant === ""},
      disabled:opacity-50 disabled:
      `}>
      {label}
    </Link>
  )
}

export default Button