import React from 'react'

const Heading2 = ({ txt, span, big }) => {
  return (
    <section>
      <span className='subtitle-span'>{span}</span>
      <h2 className={big && 'subtitle-big'}>{txt}</h2>
    </section>
  )
}

export default Heading2
