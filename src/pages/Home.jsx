import React from 'react';
import { CTA, Clients, Landing, Latest, News, Reel, Stats } from '../utils/imports';

const Home = () => {


  return (
    <div className='page h-[100vh] overflow-y-auto scrollbar-hide'>
      <div className='relative flexV items-center justify-start w-full h-fit scrollbar-hide'>
        {/* <Landing /> */}
        <Reel />
        <Stats />
        <Latest />
        {/* <Clients /> */}
        {/* <CTA /> */}
        {/* <News /> */}
      </div>
    </div>
  )
}

export default Home