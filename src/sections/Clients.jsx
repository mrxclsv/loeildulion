import React from 'react'
import { Client, Header } from '../utils/imports'
import { clients } from '../utils/data'


const TheParty = () => {

  return (
    <div className='flexV center bg-zinc-950  border-y-zinc-900 w-full mx-auto py-16'>

      <div className='resp flex items-center'>
        <Header
          header="Our clients"
          title="How Our Commitment to Satisfaction Drives Success"
          descr="Through engaging and insightful content, we aim to foster a deeper appreciation and connection to the spirit of Senegal, both locally and globally, while fostering a sense of unity and pride within our community."
        />
      </div>

      <div className='grid grid-flow-col grid-cols-2===lg:grid-cols-4 center '>
        {clients.map((item, index) => (
          <Client key={index}
            name={item.name}
            link={item.link}
            logo={item.logo}
          />
        ))}
      </div>
    </div>
  )
}

export default TheParty