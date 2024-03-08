import { useState } from "react"


const useNav = () => {


  const [menu, setMenu] = useState()

  function toggleMenu() {
    if (menu) {
      setMenu(false)
    } setMenu(true)
  }


  const base = "whitespace-nowrap font-semibold !cursor-pointer px-3 capitalize quick"
  const navDESKInactive = `${base} text-zinc-200 hover:text-white`
  const navDESKActive = `${navDESKInactive} text-white`

  const navMOBInactive = `${base} ${navDESKInactive}`
  const navMOBActive = `${navDESKActive}`

  return {
    navDESKActive, navDESKInactive,
    navMOBActive, navMOBInactive,
    menu, setMenu,
    toggleMenu
  }
}

export default useNav