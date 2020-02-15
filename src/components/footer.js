import React from 'react'
import { Link } from 'gatsby'
import LazyLoad from 'react-lazyload'

import StyledFooter from '../styles/footer'

const Footer = () => (
  <StyledFooter className='footer'>
    <div className='footer__logo'>
      <a href='/'>
        <LazyLoad offset={100}>
          <img
            id='footLogo'
            src='https://res.cloudinary.com/dy6lb8vna/image/upload/f_auto/v1563330950/Logos/white-logo.png'
            alt='GB Bowlworks Logo'
          />
        </LazyLoad>
      </a>
    </div>
    <div className='footer__container'>
      <ul className='foot-nav'>
        <li className='footItem'>
          <Link className='footLink' to='/'>
            Home
          </Link>
        </li>
        <li className='footItem'>
          <Link className='footLink' to='/about'>
            About
          </Link>
        </li>{' '}
        <li className='footItem'>
          <Link className='footLink' to='/blog'>
            Blog
          </Link>
        </li>{' '}
        <li className='footItem'>
          <Link className='footLink' to='/store'>
            Store
          </Link>
        </li>
        <li className='footItem'>
          <Link className='footLink' to='/contact'>
            Contact
          </Link>
        </li>
        <li className='footItem'>
          <Link className='footLink' to='/faq'>
            FAQ
          </Link>
        </li>
      </ul>
    </div>
    <div className='social'>
      <a id='instagramColorLink' href='https://www.instagram.com/gbbowlworks/'>
        <LazyLoad offset={100}>
          <img
            id='igImageColor'
            src='https://res.cloudinary.com/dy6lb8vna/image/upload/f_auto/v1563330950/Logos/ig-colorful.png'
            alt='Instagram Logo'
          />
        </LazyLoad>
      </a>
      <a className='etsy' href='https://www.etsy.com/shop/GBBowlworks'>
        <LazyLoad offset={100}>
          <img
            className='etsyLogo'
            src='https://res.cloudinary.com/dy6lb8vna/image/upload/f_auto/v1563330949/Logos/Etsy_logo_lg_rgb.png'
            alt='Etsy Logo'
          />
        </LazyLoad>
      </a>
    </div>
    <div className='copyright'>
      <p className='footer__copyright'>
        &copy;2019 GB Bowlworks, LLC. The material on this site may not be reproduced, distributed, transmitted, cached
        or otherwise used, except with prior written permission of GB Bowlworks, LLC.
      </p>
    </div>
  </StyledFooter>
)

export default Footer
