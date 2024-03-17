import React from 'react'
import { Link } from 'react-router-dom'

const Client = ({ name, logo, link }) => {
  return (
    <Link to={link || "/"} className='flexV p-2 w-full relative center group '>
      <img
        src={logo}
        className='saturate-0 opacity-60 size-32 group:hover:opacity-100 group:hover:saturate-100 object-contain'
        alt=""
      />
      {/* <h4 className='DESK center text-zinc-400 w-full'>{name || "Client name"}</h4> */}
    </Link>
  )
}

export default Client