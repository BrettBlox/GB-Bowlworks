import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  background-image: linear-gradient(to top, var(--deep), var(--baby) 70%);
  padding: 28px 1.25rem;

  #secondLogo {
    display: none;
  }

  #mainLogo {
    img {
      width: 250px;
    }
    &:hover {
      animation-name: spin;
      animation-duration: 100ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
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
    background-image: linear-gradient(var(--gold), var(--gold));
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
      background-size: 100% 100%;
      transform: translateY(-3px) scale(1.2);

      &:after {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--gold);
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }

    &--active {
      transform: translateY(-3px) scale(1.1);
      background-color: var(--gold);

      &:after {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
  }

  /*************************************************************
***HAMBURGER DROPDOWN MENU ************************
*************************************************************/
  & > .menu > li {
    padding: 0.7rem;
  }

  .menu-icon {
    cursor: pointer;
    display: inline-block;
    position: relative;

    .navicon {
      background: #333;
      display: block;
      height: 2px;
      position: fixed;
      top: 1.7rem;
      left: 1.25rem;
      margin: 0;
      margin-left: 0;
      transition: background 0.2s ease-out;
      width: 1.875rem;

      &::before,
      &::after {
        background: #333;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        z-index: -1;
        transition: all 0.2s ease-out;
        width: 100%;
      }

      &::before {
        top: 7px;
      }

      &::after {
        top: -7px;
      }
    }
  }

  .menu-btn {
    display: none;

    &:checked {
      & ~ .menu {
        max-height: 100%;
        display: block;
      }
      & ~ .menu-icon {
        .navicon {
          background: transparent;

          &::before {
            transform: rotate(-135deg);
          }
          &::after {
            transform: rotate(135deg);
          }
        }
      }

      & ~ .menu-icon:not(.steps) .navicon:before,
      & ~ .menu-icon:not(.steps) .navicon:after {
        top: 0;
      }
    }

    & ~ .menu {
      display: none;
      a {
        font: 700 2rem 'Cinzel', sans-serif;
        background-color: var(--blood);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    #mainLogo > img {
      width: 250px;
    }
  }

  @media only screen and (max-width: 101.25rem) {
    #mainLogo > img {
      width: 200px;
    }

    .navLink {
      font: 300 2rem 'Cinzel', sans-serif;
    }
  }

  @media only screen and (max-width: 860px) {
    #mainLogo > img {
      width: 150px;
    }

    .navLink {
      font: 300 1.7rem 'Cinzel', sans-serif;
    }
  }

  @media only screen and (max-width: 710px) {
    #mainLogo > img {
      width: 100px;
    }
  }

  @media only screen and (max-width: 610px) {
    z-index: 100;
    display: flex;
    flex-direction: column;
    background-color: var(--baby);
    background-image: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;

    & > .menu {
      list-style: none;
      margin: 0;
      padding: 2rem 4rem 0 1rem;
    }

    .navLink {
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

  @media only screen and (min-width: 611px) {
    & > .menu {
      display: none;
      list-style: none;
    }

    .menu > li,
    .resLink {
      display: none;
    }

    .menu-icon {
      display: none;
    }

    #mainLogo2 {
      display: none;
    }
  }
`

export default StyledHeader
