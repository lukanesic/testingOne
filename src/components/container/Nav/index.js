import React from 'react'
import Image from 'next/image'

import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import { Cross as Hamburger } from 'hamburger-react'
import { useRouter } from 'next/router'

import logo from './../../../../public/logo.png'
import Button from '../../ui/Button'
// import { useDispatch } from 'react-redux'
// import { interactMenu } from './../../redux/slices/menuSlice'

const Nav = ({ open, setOpen, openSearch, setOpenSearch }) => {
  const router = useRouter()
  //   const dispatch = useDispatch()

  return (
    <div className='fullwidth'>
      <nav>
        <div className='logo' onClick={() => router.push('/')}>
          <Image
            src={logo}
            alt='logo'
            style={{ width: '100%', height: '100%', cursor: 'pointer' }}
            fill
          />
        </div>

        <div className='liItems'>
          <li className='active'>Početna</li>
          <li>Jugometal</li>
          <li>Servis</li>
          <li>Finansiranje</li>
          <li>Kontakt</li>
        </div>

        <div className='content'>
          <span className='rez-delovi-btn'>
            <Button
              txt={'Rezervni delovi'}
              //   onClick={() => dispatch(interactMenu())}
            />
          </span>

          <CiSearch
            className='icon'
            onClick={() => setOpenSearch(!openSearch)}
            style={{ cursor: 'pointer' }}
          />
          <CiShoppingCart
            className='icon'
            style={{ cursor: 'pointer' }}
            onClick={() => router.push('/cart')}
          />

          <div className='front'>
            <Hamburger
              toggled={open}
              toggle={setOpen}
              size={24}
              color={'#333'}
            />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
