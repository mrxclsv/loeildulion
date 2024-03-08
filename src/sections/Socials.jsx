import React from 'react'
import { project } from '../utils/data'
import { SocialItem } from '../utils/imports'


const Socials = ({ simplified }) => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='flex center gap-2 relative'>

      {project.socials.slice(0, project.socials.length - 1).map(item => (
        <SocialItem
          key={item.title}
          icon={item.title}
          simplified
          onClick={() => openInNewTab(`https://${item.title}.com`)}
        />
      ))}


    </div>
  )
}

export default Socials