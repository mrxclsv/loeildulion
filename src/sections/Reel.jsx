import React, { useState } from 'react'
import { useMedia } from '../hooks';
import ReactPlayer from 'react-player';
import { project } from '../utils/data';


const Landing = () => {

  const { isMuted, setIsMuted, isPlaying, setIsPlaying } = useMedia()
  const [mediaWidth, setMediaWidth] = useState('100vw')

  const [showText, setShowText] = useState(false)

  return (

    <div className="flexV center relative w-[100svw] bg-black overflow-hidden">
      <div className="flexV relative h-[80svh] w-[100svw]">

        <div className='flexV center absolute inset-0 z-[1]'>
          <div id="Reel" onMouseEnter={() => setShowText(true)} onMouseLeave={() => setShowText(false)}
            className='DESK screen items-center justify-center relative overflow-hidden z-[4] !cursor-pointer'>
            <div className={`absolute z-[5] flexV bottom-0 items-start px-10 mx-auto !h-fit pb-6 signal 
              ${showText ? "signal" : "bg-red-400"}
            `}>
              <h4 className='uppercase '>{project.tagline}</h4>
              <p className='leading-normal mt-6 w-full text-balance text-left lg:w-1/2'>Notre mission est de défendre et de célébrer avec passion la riche tapisserie du sport, de l'art et de la culture du Sénégal. En mettant l'accent sur l'essence vibrante du Sénégal, nous nous efforçons d'être la première plateforme qui élève et promeut les divers talents, histoires et réalisations au sein du paysage dynamique de notre nation.</p>
            </div>

            <div className='scale-105 screen flex center relative z-[2] '>
              <div className='w-screen flex absolute bottom-0 h-[300px] z-[2] bg-gradient-to-t from-black translate-y-[50px]= ' />
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