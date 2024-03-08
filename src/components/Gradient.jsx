import React from 'react'

const Gradient = ({option, height, position, fromColor, toColor, color }) => {

  return (

    <div className={`${height || "h-[100px]"} z-[0] 
    bg-gradient-to-b from-black
    
    ${option === "absolute" && 'absolute inset-0'}
    ${option === "relative" && 'relative '}
    ${position === "top" && 'top-0'}
    ${position === "bottom" && 'bottom-0'}
    ${position}

    `} />

  )
}

export default Gradient