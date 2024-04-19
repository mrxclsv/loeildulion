import React from 'react'
import { NavLink } from 'react-router-dom'

import { navbar, useNav } from '../utils/data'
import { Button, Gradient, NavItem, Socials } from '../utils/imports'


const Navbar = () => {

  const { /* toggleMenu, navDESKActive, navDESKInactive, */ navMOBActive, navMOBInactive } = useNav()
  const { menu, setMenu } = useNav()


  return (
    <nav className='fixed top-0 h-10 = inset-x-0 max-w-[100svw] flex z-[200] '>

      <div className='w-full h-16 pt-4 flex items-center justify-center max-w-screen-2xl mx-auto z-[200] '>
        <div className='flex w-full justify-between items-center *:w-full *:center'>
          {/* LEFT FOR DESK NAVLIST */}
          <div className='DESK px-6'>
            <div className='flex items-center justify-start w-full space-x-5'>
              {navbar.left.map((item, index) => (
                <NavItem key={item.name}
                  to={item.link}
                  name={item.name}
                  icon={item.icon}
                  link={item.link}
                  onClick={() => setMenu(false)}
                />
              ))}
            </div>
          </div>


          {/* MID DIV FOR LOGO */}
          <div className="flex center z-[300]" onClick={() => setMenu(false)}>
            <img src='/logo.png' className='flex center size-16 object-contain' alt="loeildulion ®" />
          </div>


          {/* RIGHT FOR DESK NAVLIST */}
          <div className='DESK px-6'>
            <div className='flex items-center justify-end w-full space-x-5'>
              {navbar.right.map((item, index) => (
                <NavItem key={item.name}
                  to={item.link}
                  name={item.name}
                  icon={item.icon}
                  link={item.link}
                  onClick={() => setMenu(false)}
                />
              ))}
              {/* <Button label="Start a project" action={() => { }} variant="primary" /> */}
              {/* <Button label="Commencer un projet" action={() => {}} variant="primary" /> */}
              <Button label="Contact" action={() => { }} variant="primary" />
            </div>
          </div>
        </div>
      </div>

      {/* MENU BUTTON */}
      <div className='MOB center absolute right-4 top-3 remixicon z-[302] size-12' onClick={() => setMenu(!menu)}>
        <i className={`ri-${!menu ? "menu-3" : "close"}-line scale-y-90`} />
      </div>


      <div className={`MOB w-full absolute inset-0 z-[201] bg-blakk p-4 transition ${menu ? `translate-x-0 oneSecond` : `translate-x-full quick`}`}>
        <div className='wrapper full flexV pt-6'>
          {/* MOBILE NAVLIST */}
          <div className={`mobnavlist wrapper full flex  `}>
            <div className='flexV items-center justify-start full'>
              <div className='nav&CTAWrapper flexV center full'>
                {navbar.left.map((item, index) => (
                  <NavLink
                    key={item.name}
                    to={item.link}
                    className={({ isActive }) => isActive ? navMOBActive : navMOBInactive}>
                    {item.name}
                  </NavLink>
                ))}
                <Button label="Get Involved" action={() => { }} variant="primary" />
              </div>
              <div><Socials simplified /></div>
            </div>
          </div>

        </div>
      </div>
      
      <Gradient
        option="absolute" styleposition="-top-10"
        height="h-[200px] -translate-y-[60px]"
        fromColor='black' toColor="transparent"
      />
    </nav>
  )
}

export default Navbar