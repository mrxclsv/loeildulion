import React, { useState } from 'react'
import { useNav } from '../hooks'
import { NavLink, useLocation } from 'react-router-dom'

const NavItem = ({ link, name, icon, }) => {

  const location = useLocation()
  const { navDESKActive, navDESKInactive, navMOBActive, navMOBInactive } = useNav()

  const [hover, setHover] = useState(false)

  return (
    <NavLink
      to={link}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      className={({ isActive }) => isActive ? navDESKActive : navDESKInactive} >

      {name !== "" &&
        <p> {name}</p>
      }

      {icon !== '' &&
        <i className={`ri-${icon}-${hover === true ? 'fill' : 'line'}  btn text-white
        `} />
      }

    </NavLink>
  )
}

export default NavItem