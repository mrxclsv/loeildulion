import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ label, link, action, variant }) => {
  return (
    <Link
      to={link || undefined}
      onClick={action}
      className={`inline-flex center px-4 py-2 rounded-lg bg-zinc-500/5
                ${variant === 'primary' && '!bg-primary'}
                ${variant === "naked" && "!bg-transparent"}
                disabled:opacity-50 disabled:
                `}>

      {label}

    </Link>
  )
}

export default Button