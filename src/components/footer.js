import React from 'react'
import { Link } from 'gatsby'

import darkLogo from '../images/logos/dark-alt-logo.png'
import whiteLogo from '../images/logos/white-logo.png'
import igColor from '../images/logos/ig-colorful.png'
import '../styles/footer.css'

const Footer = () => (
  <div>
    <footer className="footer">
      <div className="footer__logo">
        <a href="/">
          <img id="footLogo" src={whiteLogo} alt="GB Bowlworks Logo" />
        </a>
        {/* <h1 className="footTitle">GB BOWLWORKS</h1> */}
      </div>
      <div className="footer__container">
        <ul className="foot-nav">
          <li className="footItem">
            <Link className="footLink" to="/">
              Home
            </Link>
          </li>
          <li className="footItem">
            <Link className="footLink" to="/about">
              About
            </Link>
          </li>{' '}
          <li className="footItem">
            <Link className="footLink" to="/blog">
              Blog
            </Link>
          </li>{' '}
          <li className="footItem">
            <Link className="footLink" to="/store">
              Store
            </Link>
          </li>
          <li className="footItem">
            <Link className="footLink" to="/contact">
              Contact
            </Link>
          </li>
          <li className="footItem">
            <Link className="footLink" to="/contact">
              FAQ
            </Link>
          </li>
        </ul>
        <div className="copyright">
          <p className="footer__copyright">
            Built by Brett Bloxom for GB Bowlworks. Copyright &copy;2019 by
            Brett Bloxom. You are 100% allowed to use this webpage for both
            personal and commercial use, but NOT to claim it as your own design.
            A credit to the original author, Brett Bloxom, is of course highly
            appreciated!
          </p>
        </div>
      </div>
      <div className="social">
        <a
          id="instagramColorLink"
          href="https://www.instagram.com/gbbowlworks/"
        >
          <img id="igImageColor" src={igColor} alt="Instagram Logo" />
        </a>
        <a class="etsy" href="https://www.etsy.com/shop/GBBowlworks">
          <img
            class="etsyLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Etsy_logo_lg_rgb.png"
          />
        </a>
      </div>
    </footer>
  </div>
)

export default Footer
