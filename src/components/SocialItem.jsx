import React from 'react'

const SocialItem = ({simplified, title, icon, css, onClick }) => {
  return (
    <button onClick={onClick}
      className={`group socialBtn remixicon ${simplified && "hover:bg-zinc-50/5"} ${css}`}>
      <i className={`ri-${icon}-line active:group-active:`} />
      <p>{title}</p>
    </button>
  )
}

export default SocialItem