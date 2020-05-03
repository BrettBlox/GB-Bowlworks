import React from 'react'

import StyledHeader from '../styles/header'

import FadeLink from './fadeLink'

const Header = () => (
  <StyledHeader>
    <FadeLink to='/' className='navLink' activeClassName='navLink--active'>
      HOME
    </FadeLink>
    <FadeLink to='/about' className='navLink' activeClassName='navLink--active'>
      ABOUT
    </FadeLink>
    <FadeLink to='/blog' className='navLink' activeClassName='navLink--active'>
      BLOG
    </FadeLink>
    <FadeLink to='/' id='mainLogo'>
      <img
        id='logo'
        src='https://res.cloudinary.com/dy6lb8vna/image/upload/f_auto/v1563330950/Logos/main_logo.png'
        alt='GB Bowlworks Logo'
      />
    </FadeLink>
    <FadeLink to='/store' partiallyActive='true' className='navLink' activeClassName='navLink--active'>
      STORE
    </FadeLink>
    <FadeLink to='/contact' className='navLink' activeClassName='navLink--active'>
      CONTACT
    </FadeLink>
    <FadeLink to='/faq' className='navLink' activeClassName='navLink--active'>
      FAQ
    </FadeLink>
    <input className='menu-btn' type='checkbox' id='menu-btn' />
    <label className='menu-icon' htmlFor='menu-btn'>
      <span className='navicon' />
    </label>
    <FadeLink to='/' id='mainLogo2'>
      <img
        id='logo2'
        src='https://res.cloudinary.com/dy6lb8vna/image/upload/f_auto/v1563330950/Logos/main_logo.png'
        alt='GB Bowlworks Logo'
      />
    </FadeLink>
    <ul className='menu'>
      <li>
        <FadeLink to='/' className='resLink'>
          HOME
        </FadeLink>
      </li>
      <li>
        <FadeLink to='/about' className='resLink'>
          ABOUT
        </FadeLink>
      </li>
      <li>
        <FadeLink to='/blog' className='resLink'>
          BLOG
        </FadeLink>
      </li>
      <li>
        <FadeLink to='/store' className='resLink'>
          STORE
        </FadeLink>
      </li>
      <li>
        <FadeLink to='/contact' className='resLink'>
          CONTACT
        </FadeLink>
      </li>
      <li>
        <FadeLink to='/faq' className='resLink'>
          FAQ
        </FadeLink>
      </li>
    </ul>
  </StyledHeader>
)

export default Header
