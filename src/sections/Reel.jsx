import React, { useState } from 'react'
import { useMedia } from '../hooks';
import ReactPlayer from 'react-player';
import { LandingHero } from '../utils/assets'
import { project } from '../utils/data';


const Landing = () => {

  const { isMuted, setIsMuted, isPlaying, setIsPlaying } = useMedia()
  const [mediaWidth, setMediaWidth] = useState('100vw')


  return (

    <div className="flexV center relative w-[100svw] bg-black overflow-hidden">

      <div className="flexV relative h-[80svh] =h-fit w-[100svw]">
        <div className='flex center absolute inset-0'>
          {/* <img src={LandingHero} className='MOB opacity-100 full scale-105 object-cover' alt="hero" /> */}

          <div id="Reel" onClick={() => setIsPlaying(!isPlaying)} onMouseEnter={() => setIsMuted(true)} className='DESK justify-end screen relative overflow-hidden z-[5]'>
            <div className='space-y-6 flexV justify-center absolute fit bottom-0 w-1/2 mx-auto  inset-0 ======== signal'>
              <h4 className='uppercase '>{project.tagline}</h4>
              <p className='leading-8 w-full text-balance'>Notre mission est de défendre et de célébrer avec passion la riche tapisserie du sport, de l'art et de la culture du Sénégal. En mettant l'accent sur l'essence vibrante du Sénégal, nous nous efforçons d'être la première plateforme qui élève et promeut les divers talents, histoires et réalisations au sein du paysage dynamique de notre nation.</p>
            </div>
            
            <div className='scale-105 screen full flex center relative'>
              <ReactPlayer
                // url="https://www.youtube.com/watch?v=xuas_Yc7VNQ"
                // url="https://www.youtube.com/watch?v=V1XeRNYIjqw"
                url="https://www.youtube.com/watch?v=t2OjUdh8ouo"
                width={mediaWidth}
                height="100vh"
                controls={false}
                playing={isPlaying} loop
                muted
              /* ={isMuted} */
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Landing