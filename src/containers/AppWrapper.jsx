import React from 'react';
import { Navbar, Footer } from '../utils/imports';
import { ReactLenis } from "lenis/react";


const AppWrapper = ({ children }) => {
  return (
    <ReactLenis root>
      <Navbar />
      <main className="w-screen overflow-x-clip overflow- scrollbar-hide min-h-screen relative grid grid-rows-[1fr_auto]">
        <div className='w-full'>
          {children}
        </div>
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default AppWrapper;