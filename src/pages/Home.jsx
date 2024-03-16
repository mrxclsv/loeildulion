import React from 'react';
import { CTA, Clients, Landing, Latest, News, Reel, Stats } from '../utils/imports';

const Home = () => {


  return (
    <div className='page'>
      <div className=''>
        {/* <Landing /> */}
        <Reel />
        <Stats />
        <Latest />
        <Clients />
        <CTA />
        <News />
      </div>
    </div>
  )
}

export default Home