import React from 'react';
import { twMerge } from 'tailwind-merge';

import { navbar, useNav } from '../utils/data';
import { NavItem } from '../utils/imports';


const Navbar = () => {

  // const { navMOBActive, navMOBInactive } = useNav();
  // const { menu, setMenu } = useNav();
  const { onClose } = useNav().useMenu;


  return (
    <nav className='fixed inset-x-0 flex top-0  z-[99] '>

      <div className='w-full h-16 pt-4= flex items-center justify-center paddingX= '>
        <div className='flex w-full items-center'>
          {/* LEFT FOR DESK NAVLIST */}
          {/*  <div className='DESK px-6'>
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
          </div> */}

          {/* RIGHT FOR DESK NAVLIST */}
          <div className='DESK px-6=='>
            <div className='flex items-center justify-end w-full space-x-5'>
              {navbar.right.map((item) => (
                <NavItem key={item.name}
                  to={item.link}
                  name={item.name}
                  icon={item.icon}
                  link={item.link}
                  onClick={onClose}
                />
              ))}
            </div>
          </div>

          {/* LOGO */}
          <div className="flex center z-[]" onClick={onClose}>
            <img src='/logo.png' className='flex center size-16 object-contain' alt="loeildulion ®" />
          </div>


        </div>
      </div>

      {/* MENU BUTTON */}
      {/*   <button onClick={handleMenu} className='MOB center iconContainer z-[100] size-12='>
        <i className={`ri-${!menu ? "menu-3" : "close"}-line scale-y-90`} />
      </button> */}


      <div className={twMerge(`MOB w-full fixed inset-0 z-[50] bg-blakk p-4 transition`)}>
        <div className='wrapper w-full flex flex-col pt-16'>
          {/* MOBILE NAVLIST */}
          {/*   <div className="flex flex-col w-full">
            <div className='flex flex-col w-full items-center justify-between'>
              <div className='flex flex-col h-full '>
                {navbar.left.map((item, index) => (
                  <NavLink
                    key={`${item.name}_${index}`}
                    to={item.link}
                    className={({ isActive }) => isActive ? navMOBActive : navMOBInactive}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <Button label="Reserver une consultation en ligne" action={() => { }} variant="primary" />

              <div><Socials simplified /></div>
            </div>
          </div> */}

        </div>
      </div>

      {/*   <Gradient
        option="absolute" styleposition="-top-10"
        height="h-[200px] -translate-y-[60px]"
        fromColor='black' toColor="transparent"
      /> */}
    </nav>
  )
}

export default Navbar;