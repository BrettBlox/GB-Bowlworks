import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-image: linear-gradient(to bottom, #173e43, hsl(0, 100%, 18%) 70%);
  padding: 8rem;
  padding-bottom: 6rem;
  margin-top: 4rem;

  .footer__container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(1fr, auto));
    grid-auto-rows: auto;
    justify-content: center;

    .foot-nav {
      border-top: 1px solid #d7a150;
      list-style: none;
      text-align: center;
      width: 60vw;
      margin: 4rem;
      padding: 0;
      align-items: center;
    }
  }

  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;

    .footer__copyright {
      color: #3fb0ac;
      text-align: center;
      margin-top: 6rem;
      max-width: 50vw;
    }
  }

  .footItem {
    display: inline-block;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-3px) scale(1.1);
    }
    .footLink {
      text-align: center;
      font: 700 1.5rem 'Cinzel', sans-serif;
      background-color: #3fb0ac;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(
        to right,
        #d7a150 50%,
        #d7a150 50%,
        #3fb0ac 50%
      );
      background-size: 200% 100%;
      background-position: 100%;
      display: inline-block;
      padding: 1em;
      transition: all 0.3s;

      &:hover {
        background-position: 0%;
      }
    }
  }

  .footer__logo {
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 0;
  }

  #footLogo {
    width: 15rem;
  }

  #footLogo:hover {
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

  .social {
    text-align: center;

    .etsyLogo {
      width: 6rem;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-3px) scale(1.1);
      }
    }

    #instagramColorLink {
      margin-right: 10px;
    }

    #igImageColor {
      width: 3em;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-3px) scale(1.1);
      }
    }
  }

  @media only screen and (max-width: 805px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 3rem;
    margin-top: 0;

    .footer__logo {
      margin-bottom: 0;
    }
    .footItem {
      display: flex;
      justify-content: center;

      .footLink {
        font-weight: bold;
      }
    }

    #footLogo {
      width: 10rem;
    }
  }
`

export default StyledFooter
