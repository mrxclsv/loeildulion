import React from 'react';
import {
  // CTA, Clients,  Latest, News, 
  Reel, /* Stats, Landing, */
} from '../utils/imports';

const Home = () => {


  return (
    <div className='page overflow-y-auto scrollbar-hide'>
      <div className='relative flexV items-center justify-start w-full h-fit scrollbar-hide'>
        {/* <Landing /> */}
        <Reel />
        {/* <Stats /> */}
        {/* <Latest /> */}
        {/* <Clients /> */}
        {/* <CTA /> */}
        {/* <News /> */}
      </div>
    </div>
  )
}

export default Home