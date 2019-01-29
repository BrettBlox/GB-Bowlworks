import { Link } from 'gatsby'
import React from 'react'
import Logo from '../images/logos/main_logo.png'

import '../styles/header.css'

const Header = () => (
  <div id='header'>
    <Link to='/about' className='navLink'>
      ABOUT
    </Link>
    <Link className='navLink' to='/blog'>
      BLOG
    </Link>
    <Link id='mainLogo' to='/'>
      <img id='logo' src={Logo} alt='GB Bowlworks Logo' />
    </Link>
    <Link className='navLink' to='/store'>
      STORE
    </Link>
    <Link className='navLink' to='/contact'>
      CONTACT
    </Link>
    <input className='menu-btn' type='checkbox' id='menu-btn' />
    <label className='menu-icon' htmlFor='menu-btn'>
      <span className='navicon' />
    </label>
    <Link id='mainLogo2' to='/'>
      <img id='logo2' src={Logo} alt='GB Bowlworks Logo' />
    </Link>
    <ul className='menu'>
      <li>
        <Link className='resLink' to='/'>
          HOME
        </Link>
      </li>
      <li>
        <Link className='resLink' to='/about'>
          ABOUT
        </Link>
      </li>
      <li>
        <Link className='resLink' to='/blog'>
          BLOG
        </Link>
      </li>
      <li>
        <Link className='resLink' to='/store'>
          STORE
        </Link>
      </li>
      <li>
        <Link className='resLink' to='/contact'>
          CONTACT
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
