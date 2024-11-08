import { useState } from "react";
import { create } from 'zustand';

const useNav = () => {


  const [menu, setMenu] = useState(false)

  function toggleMenu() {
    if (menu) {
      setMenu(false)
    } setMenu(true)
  }

  const useMenu = create((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }))

  const handleMenu = () => {
    if (!useMenu.isOpen) {
      useMenu.onOpen();
      console.log("menu is open")
    }
    else {
      console.log("menu is CLOSED")
      useMenu.onClose()
    }
  };

  const base = "flex items-center space-x-2 whitespace-nowrap font-semibold lg:h-10 !cursor-pointer px-3 capitalize quick"
  const navDESKInactive = `${base} text-zinc-200/70 hover:text-white`
  const navDESKActive = `${navDESKInactive} !text-white`

  const navMOBInactive = `${base} ${navDESKInactive}`
  const navMOBActive = `${navDESKActive}`

  return {
    useMenu, handleMenu,
    navDESKActive, navDESKInactive,
    navMOBActive, navMOBInactive,
    menu, setMenu,
    toggleMenu
  }
}

export default useNav;