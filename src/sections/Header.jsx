import React from 'react'
import { Link } from 'react-router-dom'

const Section = ({ header, title, descr, link }) => {
  return (
    <div className='my-10 flexV justify-start text-left max-w-3xl relative'>
      <div className='flexV space-y-6 '>
        <img src="/logo.png" className='size-16' alt="" />
        {header !== "" && <small className='uppercase tracking-widest text-primary !font-semibold'>{header || 'a header'}</small>}
        {title !== "" && <h2>{title || "This is a title for current section"}</h2>}
        {descr !== "" && <p className='leading-8 text-balance'>{descr || "This is a description"}</p>}
      </div>

      {link !== "" &&
        <Link>{link}</Link>
      }
    </div>
  )
}

export default Section