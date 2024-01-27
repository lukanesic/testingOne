import Heading1 from '@/components/ui/Heading1'
import Slick2 from '@/components/ui/Slick2'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroContent'>
        <span className='welcome'>
          Dobrodosli u <span className='redTxt'>Jugometal</span>
        </span>
        <h1>
          Oprema za <span className='redTxt'>uspešno</span> poljoprivredno
          poslovanje
        </h1>
        <p>
          Naša firma obavlja i usluge servisiranja, zahvaljujuci odlično
          organizovanoj servisnoj službi, opremljenoj originalnim rezervnim
          delovima.
        </p>
      </div>
      <Slick2 />
    </div>
  )
}

export default Hero
