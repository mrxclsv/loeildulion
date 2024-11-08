import React from 'react';
import { project } from '../utils/data';
import { reel } from '../utils/assets';

import useReel from '../hooks/useReel';


const Landing = () => {

  const { isPlaying, isMuted } = useReel();

  return (
    <div className="relative w-[100vw] h-[300vh] bg-black">

      <div className='flexV center absolute inset-0 z-[1] group'>
        <div id="Reel"
          className='screen items-center justify-center relative overflow-hidden z-[5] !cursor-pointer '>
          <div className={`absolute z-[10] flexV bottom-0 items-start px-10 mx-auto !h-fit pb-6 pt-10 opacity-0 group-hover:opacity-100 quick group-hover:bg-gradient-to-t from-blakk
            `}>
            <h4 className='uppercase relative '>{project.tagline}</h4>
            <p className='leading-normal relative mt-6 w-full text-balance text-left lg:w-1/2'>Notre mission est de défendre et de célébrer avec passion la riche tapisserie du sport, de l'art et de la culture du Sénégal. En mettant l'accent sur l'essence vibrante du Sénégal, nous nous efforçons d'être la première plateforme qui élève et promeut les divers talents, histoires et réalisations au sein du paysage dynamique de notre nation.</p>
          </div>

          <div className='w-screen flex absolute bottom-0 h-[300px] z-[2] bg-gradient-to-t from-black translate-y-[50px]= ' />

          <video autoPlay={isPlaying} muted={isMuted} playsInline loop
            className='w-full h-full object-cover'
          >
            <source src={reel} />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Landing;