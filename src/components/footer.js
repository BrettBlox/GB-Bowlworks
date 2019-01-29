import React from 'react'
import { Link } from 'gatsby'

import whiteLogo from '../images/logos/white-logo.png'
import igColor from '../images/logos/ig-colorful.png'
import '../styles/footer.css'

const Footer = () => (
  <div>
    <footer className='footer'>
      <ul className='foot-nav'>
        <a href='/'>
          <img id='footLogo' src={whiteLogo} alt='GB Bowlworks Logo' />
        </a>
        <li>
          <Link className='footLink' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='footLink' to='/about'>
            About
          </Link>
        </li>{' '}
        <li>
          <Link className='footLink' to='/blog'>
            Blog
          </Link>
        </li>{' '}
        <li>
          <Link className='footLink' to='/store'>
            Store
          </Link>
        </li>
        <li>
          <Link className='footLink' to='/contact'>
            Contact
          </Link>
        </li>
        <a
          id='instagramColorLink'
          href='https://www.instagram.com/gbbowlworks/'>
          <img id='igImageColor' src={igColor} alt='Instagram Logo' />
        </a>
        {/* <li>
        © {new Date().getFullYear()}
        </li> */}
      </ul>
    </footer>
  </div>
)

export default Footer
