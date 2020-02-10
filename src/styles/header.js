import { css } from 'styled-components'

const header = css`
  #header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    background-image: linear-gradient(to top, #173e43, #3fb0ac 70%);
  }

  #secondLogo {
    display: none;
  }

  #mainLogo > img {
    width: 250px;
  }

  #mainLogo:hover {
    animation-name: spin;
    animation-duration: 100ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .navLink {
    font-size: 2.5rem;
    font-weight: 700;
    background-size: 200% 100%;
    background-position: 100%;
    background-color: var(--blood);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(#d7a150, #d7a150);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  .navLink:hover {
    background-size: 100% 100%;
    transform: translateY(-3px) scale(1.2);
  }

  .navLink:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #d7a150;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  .navLink:hover:after {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .navLink--active {
    transform: translateY(-3px) scale(1.1);
    background-color: #d7a150;
  }

  .navLink--active:after {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  /*************************************************************
***HAMBURGER DROPDOWN MENU ************************
*************************************************************/
  #header {
    padding: 28px 20px;
  }

  #header > .menu > li {
    padding: 0.7rem;
  }

  #header .menu-icon {
    cursor: pointer;
    display: inline-block;
    position: relative;
  }

  #header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: fixed;
    top: 1.7rem;
    left: 20px;
    margin: 0;
    margin-left: 0;
    transition: background 0.2s ease-out;
    width: 30px;
  }

  #header .menu-icon .navicon:before,
  #header .menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    z-index: -1;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  #header .menu-icon .navicon:before {
    top: 7px;
  }

  #header .menu-icon .navicon:after {
    top: -7px;
  }

  #header .menu-btn {
    display: none;
  }

  #header .menu-btn:checked ~ .menu {
    max-height: 100%;
  }

  #header .menu-btn ~ .menu {
    display: none;
  }

  #header .menu-btn:checked ~ .menu {
    display: block;
  }

  #header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  #header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-135deg);
  }

  #header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(135deg);
  }

  #header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  #header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  #header .menu a {
    font: 700 2rem 'Cinzel', sans-serif;
    background-color: var(--blood);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /******************************************************************
***MEDIA QUERIES **************************************************
******************************************************************/
  /*************LESS THAN 1080PX DO THIS*******************/
  @media only screen and (max-width: 1180px) {
    #mainLogo > img {
      width: 250px;
    }
  }

  /*************LESS THAN 1020PX DO THIS*******************/
  @media only screen and (max-width: 1020px) {
    #mainLogo > img {
      width: 200px;
    }

    .navLink {
      font: 300 2rem 'Cinzel', sans-serif;
    }
  }

  /*************LESS THAN 860PX DO THIS*******************/
  @media only screen and (max-width: 860px) {
    #mainLogo > img {
      width: 150px;
    }

    .navLink {
      font: 300 1.7rem 'Cinzel', sans-serif;
    }
  }

  /*************LESS THAN 710PX DO THIS*******************/
  @media only screen and (max-width: 710px) {
    #mainLogo > img {
      width: 100px;
    }
  }

  /***********LESS THAN 610PX DO THIS*****************/
  @media only screen and (max-width: 610px) {
    #header {
      z-index: 100;
      display: flex;
      flex-direction: column;
      background-color: #3fb0ac;
      background-image: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
    }

    #header > .menu {
      list-style: none;
      margin: 0;
      padding: 2rem 4rem 0 1rem;
    }

    #header .navLink {
      display: none;
    }

    #mainLogo {
      display: none;
    }

    #mainLogo2 {
      position: absolute;
      top: 0.25rem;
      right: 3rem;
    }

    #logo2 {
      width: 3rem;
    }
  }

  /************MORE THAN 611PX DO THIS*****************/
  @media only screen and (min-width: 611px) {
    #header > .menu {
      display: none;
      list-style: none;
    }

    #header .menu > li,
    .resLink {
      display: none;
    }

    #header .menu-icon {
      display: none;
    }

    #mainLogo2 {
      display: none;
    }
  }
`

export default header
