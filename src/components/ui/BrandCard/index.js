import Image from 'next/image'
import React from 'react'

const BrandCard = ({ src, alt }) => {
  return (
    <div className='brand-card'>
      <Image src={src} alt={alt} fill />
    </div>
  )
}

export default BrandCard
