import React from 'react'
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import zetor from './../../../../public/test/ztest.png'
import deer from './../../../../public/test/jdeer.png'
import solis from './../../../../public/test/stest.png'
import y from './../../../../public/test/ytest.png'
import Image from 'next/image'

const Slick2 = ({ flex, children }) => {
  let settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
  }
  return (
    <div className={`slick2 ${flex && 'flex'}`}>
      <Slider {...settings} arrows={false}>
        <div>
          <Image src={zetor} alt={'zetor'} style={{ objectFit: 'contain' }} />
        </div>
        <div>
          {' '}
          <Image src={deer} alt={'zetor'} style={{ objectFit: 'contain' }} />
        </div>
        <div>
          {' '}
          <Image src={solis} alt={'zetor'} style={{ objectFit: 'contain' }} />
        </div>
        <div>
          {' '}
          <Image src={y} alt={'zetor'} style={{ objectFit: 'contain' }} />
        </div>
      </Slider>
    </div>
  )
}

export default Slick2
