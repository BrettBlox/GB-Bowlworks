import React from 'react'
import { Link } from 'gatsby'
import LazyLoad from 'react-lazyload'
import styled, { keyframes } from 'styled-components'

const FooterWrapper = styled.footer`
  background-image: linear-gradient(to bottom, #173e43, hsl(0, 100%, 18%) 70%);
  padding: 8rem;
  padding-bottom: 6rem;
  margin-top: 4rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 3rem;
    margin-top: 0;
  }
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const FooterLogo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 0;

  img {
    width: 15rem;

    &:hover {
      animation: ${spin} infinite 100ms linear;
    }

    @media only screen and (max-width: 768px) {
      width: 10rem;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
`

const FootNav = styled.ul`
  border-top: 1px solid #d7a150;
  list-style: none;
  text-align: center;
  width: 60vw;
  margin: 4rem;
  padding: 0;
  align-items: center;

  li {
    display: inline-block;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-3px) scale(1.1);
    }

    @media only screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  }
`

const FootLink = styled(Link)`
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

  @media only screen and (max-width: 768px) {
    font-weight: bold;
  }
`

const Social = styled.div`
  text-align: center;
`

const Ig = styled.a`
  margin-right: 10px;

  img {
    width: 3em;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-3px) scale(1.1);
    }
  }
`

const Etsy = styled.a`
  img {
    width: 6rem;
    padding-top: 0.5rem;
    transition: all 0.3s;
    transform: translateY(5px);

    &:hover {
      transform: translateY(-3px) scale(1.1);
    }
  }
`

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #3fb0ac;
    text-align: center;
    margin-top: 4rem;
    max-width: 50vw;
  }
`

const Footer = () => (
  <FooterWrapper>
    <FooterLogo>
      <a href="/">
        <LazyLoad offset={100}>
          <img
            src={`https://res.cloudinary.com/dy6lb8vna/image/upload/f_auto/v1563330950/Logos/white-logo.png`}
            alt="GB Bowlworks Logo"
          />
        </LazyLoad>
      </a>
    </FooterLogo>
    <FooterContainer>
      <FootNav>
        <li>
          <FootLink to="/">Home</FootLink>
        </li>
        <li>
          <FootLink to="/about">About</FootLink>
        </li>{' '}
        <li>
          <FootLink to="/blog">Blog</FootLink>
        </li>{' '}
        <li>
          <FootLink to="/store">Store</FootLink>
        </li>
        <li>
          <FootLink to="/contact">Contact</FootLink>
        </li>
        <li>
          <FootLink to="/faq">FAQ</FootLink>
        </li>
      </FootNav>
    </FooterContainer>
    <Social>
      <Ig href="https://www.instagram.com/gbbowlworks/">
        <LazyLoad offset={100}>
          <img
            src={`https://res.cloudinary.com/dy6lb8vna/image/upload/f_auto/v1563330950/Logos/ig-colorful.png`}
            alt="Instagram Logo"
          />
        </LazyLoad>
      </Ig>
      <Etsy href="https://www.etsy.com/shop/GBBowlworks">
        <LazyLoad offset={100}>
          <img
            src={`https://res.cloudinary.com/dy6lb8vna/image/upload/f_auto/v1563330949/Logos/Etsy_logo_lg_rgb.png`}
            alt="Etsy Logo"
          />
        </LazyLoad>
      </Etsy>
    </Social>
    <Copyright>
      <p>
        &copy;2019 GB Bowlworks, LLC. The material on this site may not be
        reproduced, distributed, transmitted, cached or otherwise used, except
        with prior written permission of GB Bowlworks, LLC.
      </p>
    </Copyright>
  </FooterWrapper>
)

export default Footer
