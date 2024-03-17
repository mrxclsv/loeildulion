import React from 'react';
import { CTA, Clients, Landing, Latest, News, Reel, Stats } from '../utils/imports';

const Home = () => {


  return (
    <div className='page'>
      <div className='relative flexV items-center justify-start w-full h-full'>
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