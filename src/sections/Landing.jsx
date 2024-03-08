import React from 'react'
import { LandingHero } from '../utils/assets'

const Landing = () => {
  return (

    <div className='flex center relative full'>
      <div className="signal ">
        <img src={LandingHero} alt="hero" />
      </div>
    </div>
  )
}

export default Landing