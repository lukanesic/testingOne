import Image from 'next/image'
import React from 'react'

import dina from './../../../../public/kartice/dina-card.png'
import master from './../../../../public/kartice/Master_Card.png'
import express from './../../../../public/kartice/a-e.png'
import visa from './../../../../public/kartice/visa1.png'

const Credits = () => {
  return (
    <section className='wrapper credits'>
      <div className='credit-cards'>
        <div className='card'>
          <Image
            src={master}
            alt={'MasterCard'}
            style={{ height: '100%', width: '100%' }}
          />
        </div>
        <div className='card'>
          <Image
            src={dina}
            alt={'DinaCard'}
            style={{ height: '100%', width: '100%' }}
          />
        </div>
        <div className='card'>
          <Image
            src={express}
            alt={'ExpressCard'}
            style={{ height: '100%', width: '100%' }}
          />
        </div>
        <div className='card'>
          <Image
            src={visa}
            alt={'VisaCard'}
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      </div>

      <div className='credit'>
        <span className='out'>@2024 Jugometal, Svilajnac</span>
        {/* <span className='out'>
          Design & Development <span className='inline'>Luka Nešić</span>
        </span> */}
      </div>
    </section>
  )
}

export default Credits
