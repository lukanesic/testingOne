import React from 'react'
import { CiInstagram, CiFacebook } from 'react-icons/ci'

const Footer = () => {
  return (
    <footer className='wrapper'>
      <div className='box'>
        <span className='bolder'>
          <a className='email' href='mailto:info@jugometal.co.rs'>
            info@jugometal.co.rs
          </a>
        </span>
      </div>

      <div className='row'>
        <div className='box'>
          <span className='bold'>Adresa</span>
          <ul>
            <li>Kneza Miloša 81, 35210 Svilajnac</li>
            <li>Novosadska 634, 21235 Temerin</li>
            <li>Beogradski put 17/A, 12000 Požarevac</li>
          </ul>
        </div>

        <div className='box'>
          <span className='bold'>Telefon</span>
          <ul>
            <li>
              <a href='tel:+38135312391' className='phone'>
                Svilajnac: 035/312-391
              </a>
            </li>

            <li>
              {' '}
              <a href='tel:+38121840038' className='phone'>
                Temerin: 021/840-038
              </a>
            </li>
            <li>
              <a href='tel:+38112665544' className='phone'>
                Požarevac: 012/665-544
              </a>
            </li>
          </ul>
        </div>

        <div className='box'>
          <span className='bold'>Mreže</span>
          <ul>
            <a
              href='https://www.instagram.com/jugometal.doo'
              className='facebook'
              target='_blank'
              rel='noopener noreferrer'
            >
              <li className='social-li'>
                <CiInstagram size={30} />{' '}
                <span className='social'>instagram/jugometal</span>
              </li>
            </a>

            <a
              href='https://facebook.com/jugometal'
              className='facebook'
              target='_blank'
              rel='noopener noreferrer'
            >
              <li className='social-li'>
                <CiFacebook size={30} />{' '}
                <span className='social'>facebook/jugometal</span>
              </li>
            </a>
          </ul>
        </div>
      </div>

      <div className='row-snd'>
        <div className='box'>
          <span className='bold'>Jugometal</span>
          <div className='span light'>O nama</div>
        </div>

        <div className='box'>
          <span className='bold'>Kontakt</span>
          <div className='span light'>Kontakt informacije</div>
        </div>

        <div className='box'>
          <span className='bold'>Servis</span>
          <div className='span light'>Originalni delovi, servisiranje</div>
        </div>
        <div className='box'>
          <span className='bold'>Finansiranje</span>
          <div className='span light'>Obnovite mehanizaciju</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
