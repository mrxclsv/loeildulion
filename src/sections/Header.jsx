import React from 'react'

const Section = ({header, title, descr, }) => {
  return (
    <div className='my-10 flexV justify-start text-left space-y-6 max-w-3xl relative'>
      <img src="/logo.png" className='size-16' alt="" />
      <small className='uppercase tracking-widest'>{header || 'a header'}</small>
      <h2>{title || "This is a title for current section"}</h2>
      <p className='leading-8 text-balance'>{descr || "This is a description"}</p>
    </div>
  )
}

export default Section