import React from 'react';
import { CTA, Landing, News, TheParty } from '../utils/imports';

const Home = () => {


  return (
    <div className='page'>
      <div className='home wrapper h-[100vh] flexV center'>
        <Landing />
        <TheParty />
        <CTA />
        <News />

      </div>
    </div>
  )
}

export default Home