import { Link } from 'gatsby'
import React from 'react'

import StyledHeader from '../styles/header'

import FadeLink from './fadeLink'

const Header = () => (
  <StyledHeader>
    <FadeLink to='/about' className='navLink' activeClassName='navLink--active'>
      ABOUT
    </FadeLink>
    <Link className='navLink' to='/blog' activeClassName='navLink--active'>
      BLOG
    </Link>
    <Link id='mainLogo' to='/'>
      <img
        id='logo'
        src='https://res.cloudinary.com/dy6lb8vna/image/upload/f_auto/v1563330950/Logos/main_logo.png'
        alt='GB Bowlworks Logo'
      />
    </Link>
    <Link className='navLink' to='/store' activeClassName='navLink--active'>
      STORE
    </Link>
    <Link className='navLink' to='/contact' activeClassName='navLink--active'>
      CONTACT
    </Link>
    <input className='menu-btn' type='checkbox' id='menu-btn' />
    <label className='menu-icon' htmlFor='menu-btn'>
      <span className='navicon' />
    </label>
    <Link id='mainLogo2' to='/'>
      <img
        id='logo2'
        src='https://res.cloudinary.com/dy6lb8vna/image/upload/f_auto/v1563330950/Logos/main_logo.png'
        alt='GB Bowlworks Logo'
      />
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
      <li>
        <Link className='resLink' to='/faq'>
          FAQ
        </Link>
      </li>
    </ul>
  </StyledHeader>
)

export default Header
