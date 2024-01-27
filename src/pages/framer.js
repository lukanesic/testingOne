import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'

import one from './../../public/solis-110.png'
import two from './../../public/mulcari.webp'
import thr from './../../public/prikolice.webp'
import four from './../../public/rat.webp'
import five from './../../public/sakupljaci.webp'

console.log(one)

const Framer = () => {
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
        transition={{ ease: ['easeOut', 'easeIn'], duration: 0.8 }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        {data.map((item, index) => (
          <motion.div
            className='framer'
            key={index}
            animate={{ scale: index === imgIndex ? 1.2 : 0.5 }}
            transition={{ ease: ['easeOut', 'easeIn'], duration: 0.8 }}
            onClick={() => setImgIndex(index)}
          >
            <div
              className='image'
              style={{
                background: `url(${item.img})`,
                // background: 'black',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                height: '100%',
              }}
            />
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
        transition={{ ease: ['easeOut', 'easeIn'], duration: 0.8 }}
      >
        {data_titles.map((title, index) => (
          <div>
            <motion.span
              animate={{ scale: index === imgIndex ? 1 : 0.5 }}
              key={index}
              transition={{ ease: ['easeOut', 'easeIn'], duration: 0.8 }}
              onClick={() => {
                setImgIndex(index)
              }}
            >
              {title}
            </motion.span>
            {index === imgIndex && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: ['easeOut', 'easeIn'], duration: 1 }}
              >
                Saznajte vise
              </motion.span>
            )}
          </div>
        ))}
      </motion.div> */}
    </>
  )
}

export default Framer

const BasicsOfMotion = () => {
  return <div>hello</div>
}
