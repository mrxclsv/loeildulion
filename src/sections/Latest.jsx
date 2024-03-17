import React from 'react'
import ReactPlayer from 'react-player'

import { latestVideos } from '../utils/data';
import { Header } from '../utils/imports';



const Latest = () => {

  return (
    <div className="flexV center relative w-[100svw] bg-black overflow-hidden py-20">

      <div className='resp flexV'>
        <Header header="Our Recent Work" title=" " descr=" " />
        <div className='flexV w-full relative'>

          <div className='w-full overflow-x-scroll scrollbar-hide max-w-[90vw]'>
            <div className='flex items-center justify-start w-full gap-10'>

              {latestVideos?.map((item, index) => (
                <div id={item.url} className='aspect-9/16 min-w-[300px] h-fit *:opacity-50==== *:hover:opacity-100==== flexV center relative rounded-lg overflow-hidden '>
                  <ReactPlayer
                    url={item.url}
                    width="100%"
                    height="100%"
                    controls={false}
                    playing={false} loop
                    muted
                  />
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Latest