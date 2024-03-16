import React from 'react'
import { project } from '../utils/data';


const Landing = () => {

  return (
    <div className="flexV center relative w-[100svw] bg-black overflow-hidden py-20">
      <div className='resp flexV w-full relative'>

        <div className='h-[50vh]'>
        </div>

        <div className='flexV items-start justify-start *:text-left absolute inset-0 drop-shadow-2xl'>
          <img src="/logo.png" className='' alt="" />
          <h4 className='uppercase'>Voir à travers </h4>
          <h1 className='uppercase font-[800]'>{project.name}®</h1>
          <div className='space-y-6 mt-28'>
            <h4 className='uppercase '>{project.tagline}</h4>
            <p className='leading-8 w-full text-balance'>Notre mission est de défendre et de célébrer avec passion la riche tapisserie du sport, de l'art et de la culture du Sénégal. En mettant l'accent sur l'essence vibrante du Sénégal, nous nous efforçons d'être la première plateforme qui élève et promeut les divers talents, histoires et réalisations au sein du paysage dynamique de notre nation.</p>
          </div>
              {/* Our mission is to passionately champion and celebrate the rich tapestry of Senegalese sports, art, and culture. With a dedicated focus on showcasing the vibrant essence of Senegal, we strive to be the premier platform that uplifts and promotes the diverse talents, stories, and achievements within our nation's dynamic landscape.
               */}
        </div>

      </div>
    </div>
  )
}

export default Landing