import React from 'react';
import { CTA, Clients, Landing, News, Reel } from '../utils/imports';

const Home = () => {


  return (
    <div className='page'>
      <div className=''>
        {/* <Landing /> */}
        <Reel />
        <Clients />
        <CTA />
        <News />
      </div>
    </div>
  )
}

export default Home