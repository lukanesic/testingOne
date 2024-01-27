import React from 'react'
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Slick = ({ flex, children }) => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    mobileFirst: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 734,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className={`slider ${flex && 'flex'}`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}

export default Slick

const NextArrow = ({ onClick }) => {
  return (
    <div className='next-arrow' onClick={onClick}>
      <IoIosArrowForward />
    </div>
  )
}

const PrevArrow = ({ onClick }) => {
  return (
    <div className='prev-arrow' onClick={onClick}>
      <IoIosArrowBack />
    </div>
  )
}
