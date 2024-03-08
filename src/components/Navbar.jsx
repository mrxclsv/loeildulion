import React from 'react'
import { NavLink } from 'react-router-dom'

import { navbar, useNav } from '../utils/data'
import { Button, Socials } from '../utils/imports'


const Navbar = () => {

  const [navDESKActive, navDESKInactive, navMOBActive, navMOBInactive] = useNav()
  const [menu, setMenu, toggleMenu] = useNav()



  return (
    <nav className='fixed top-0 inset-0 flex z-[200] '>

      <div className='w-full h-14 pt-4 flex items-center justify-center max-w-screen-2xl mx-auto'>
        <div className='flex w-full justify-between items-center *:w-full *:center'>
          {/* LEFT FOR DESK NAVLIST */}
          <div className='DESK px-6'>
            <div className='flex items-center justify-start w-full'>
              {navbar.left.map((item, index) => (
                <NavLink key={item.name} to={item.link} onClick={() => setMenu(false)}
                  className={({ isActive }) => isActive ? navDESKActive : navDESKInactive}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* MID DIV FOR LOGO */}
          <div className="flex center" onClick={() => setMenu(false)}>
            <img src='/logo.png' className='flex center size-12' alt="YoonWi ®" />
          </div>

          {/* RIGHT FOR DESK NAVLIST */}
          <div className='DESK px-6'>
            <div className='flex items-center justify-end w-full space-x-5'>
              {navbar.right.map((item, index) => (
                <NavLink key={item.name} to={item.link} className={({ isActive }) => isActive ? navDESKActive : navDESKInactive} onClick={() => setMenu(false)}>
                  {item.name}
                </NavLink>
              ))}
              <Button label="Get Involved" action={() => { }} variant="primary" />
            </div>
          </div>
        </div>
      </div>

      <div className='MOB w-full absolute inset-0 z-[201]bg-blakk p-4'>
        <div className='wrapper full flexV pt-6 signal'>

          <div className='absolute right-4 top-4 remixicon'>
            <i className='ri-menu-3-line scale-y-90' />
          </div>

          {/* MOBILE NAVLIST */}
          <div className={`mobnavlist wrapper ${menu ? `` : ``} `}>
            <div className='flexV items-start justify-start full'>
              <div className='nav&CTAWrapper flexV full'>
                {navbar.left.map((item, index) => (
                  <NavLink key={item.name} to={item.link}
                    className={({ isActive }) => isActive ? navMOBActive : navMOBInactive}>
                    {item.name}
                  </NavLink>
                ))}
                <Button label="Get Involved" action={() => { }} variant="primary" />
              </div>
              <div>
                <Socials simplified />
              </div>


            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar