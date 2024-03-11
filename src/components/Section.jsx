import React from 'react'

const Section = ({ hasTitle, hasDescr, title, descr }) => {
  return (
    <div className='resp flex'>
      <div className='sectionWrapper'>
        {hasTitle && <h2>{title || "This is a section"}</h2>}
        {hasDescr &&
          <h5 className='text-zinc-300'>{descr || "Please add a description to section or set Prop 'hasDescr' to {false}"}</h5>
        }
      </div>
    </div>
  )
}

export default Section