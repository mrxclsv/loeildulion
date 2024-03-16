import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ label, link, action, variant }) => {
  return (
    <Link
      to={link || undefined}
      onClick={action}
      className={`inline-flex center px-4 py-3 rounded-lg bg-zinc-500/5 whitespace-nowrap
                ${variant === 'primary' && '!bg-primary active:scale-x-90 quick text-black'}
                ${variant === "naked" && "!bg-transparent"}
                disabled:opacity-50 disabled:
                `}>

      {label}

    </Link>
  )
}

export default Button