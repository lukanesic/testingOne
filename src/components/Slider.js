import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'

import one from './../../public/test/test11.jpeg'
import two from './../../public/test/test22.jpeg'
import thr from './../../public/test/test33.jpeg'
import four from './../../public/test/test44.jpeg'
import five from './../../public/test/test5.jpg'

const Slider = () => {
  const data = [
    {
      category: 'Transport',
      desc1:
        'Continuous 360° monitoring protects your Tesla when left unattended. Enabling Sentry Mode activates a “Standby” state, like many home alarm systems, which uses the car’s external cameras to help detect and protect against potential threats.',
      img: one.src,
    },
    {
      category: 'Stocarstvo',
      desc1:
        'Continuous 360° monitoring protects your Tesla when left unattended. Enabling Sentry Mode activates a “Standby” state, like many home alarm systems, which uses the car’s external cameras to help detect and protect against potential threats.',
      desc2:
        'All-new Live Camera, available with Premium Connectivity, lets you remotely view your car surroundings while in park, and also honk, flash and talk through the car’s speaker. Live Camera is end-to-end encrypted and cannot be accessed by Tesla.',
      img: two.src,
    },
    {
      category: 'Traktori',
      desc1:
        'Continuous 360° monitoring protects your Tesla when left unattended. Enabling Sentry Mode activates a “Standby” state, like many home alarm systems, which uses the car’s external cameras to help detect and protect against potential threats.',
      img: thr.src,
    },
    {
      category: 'Ratarstvo',
      desc1:
        'Continuous 360° monitoring protects your Tesla when left unattended. Enabling Sentry Mode activates a “Standby” state, like many home alarm systems, which uses the car’s external cameras to help detect and protect against potential threats.',
      img: four.src,
    },
    {
      category: 'Vocarstvo',
      desc1:
        'Continuous 360° monitoring protects your Tesla when left unattended. Enabling Sentry Mode activates a “Standby” state, like many home alarm systems, which uses the car’s external cameras to help detect and protect against potential threats.',
      img: five.src,
    },
  ]
  const data_titles = [
    'Transport',
    'Vocarstvo',
    'Traktori',
    'Stocarstvo',
    'Ratarstvo',
  ]

  const [dragging, setDragging] = useState(false)
  const [imgIndex, setImgIndex] = useState(2)
  const dragX = useMotionValue(0)

  const DRAG_BUFFER = 50

  const onDragStart = () => {
    setDragging(true)
  }

  const onDragEnd = () => {
    setDragging(false)
    const x = dragX.get()

    if (x <= -DRAG_BUFFER && imgIndex < data.length - 1) {
      setImgIndex((prev) => prev + 1)
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1)
    }
  }

  // ako hocu da se sam okrece
  // useEffect(() => {
  //     const intervalRef = setInterval(() => {

  //     },1000)
  //     return () => {
  //         clearInterval(intervalRef)
  //     }
  // },[])

  return (
    <>
      <motion.div
        className='wrap'
        drag='x'
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        animate={{
          // 80% 40% 0 -40% -80%
          translateX: `${
            imgIndex === 2
              ? '0%'
              : imgIndex === 1
              ? '45%'
              : imgIndex === 0
              ? '85%'
              : imgIndex === 3
              ? '-45%'
              : imgIndex === 4
              ? '-85%'
              : null
          }`,
        }}
        style={{
          x: dragX,
          cursor: 'grab',
        }}
        transition={{ ease: ['easeOut', 'easeIn'], duration: 0.6 }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        {data.map((item, index) => (
          <motion.div
            className='framer'
            key={index}
            animate={{ scale: index === imgIndex ? 1 : 0.98 }}
            onClick={() => setImgIndex(index)}
          >
            <div
              className='image'
              style={{
                background: `url(${item.img})`,
                // background: 'black',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100%',
              }}
            />
            <div className='content'>
              <h3>{item.category}</h3>
              <span>{item.desc1}</span>
              {item.desc2 && <span>{item.desc2}</span>}
            </div>

            <AnimatePresence>
              {imgIndex !== index && <div className='backdrop'></div>}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
      {/* <motion.div
        className='titles'
        animate={{
          // 80% 40% 0 -40% -80%
          translateX: `${
            imgIndex === 2
              ? '0%'
              : imgIndex === 1
              ? '45%'
              : imgIndex === 0
              ? '85%'
              : imgIndex === 3
              ? '-45%'
              : imgIndex === 4
              ? '-85%'
              : null
          }`,
        }}
        style={{
          x: dragX,
          cursor: 'grab',
        }}
        transition={{ ease: ['easeOut', 'easeIn'], duration: 0.6 }}
      >
        {data_titles.map((title, index) => (
          <motion.span
            animate={{ scale: index === imgIndex ? 1 : 0.95 }}
            key={index}
            onClick={() => {
              setImgIndex(index)
            }}
          >
            {title}
          </motion.span>
        ))}
      </motion.div> */}
    </>
  )
}

export default Slider
