import React from 'react'
import styled from 'styled-components'

import '../styles/font.css'
import '../styles/snipcart.css'

import GlobalStyles from '../styles/Global'
import SEO from './seo'
import Header from './header'
import Footer from './footer'
import ShoppingCart from './shoppingCart'

const Site = styled.div`
  min-height: 100vh;

  @media only screen and (max-width: 710px) {
    padding-top: 50px;
  }
`

const Layout = ({ children, title }) => (
  <Site>
    <SEO title={title} />
    <GlobalStyles />
    <ShoppingCart />
    <Header />
    <main>{children}</main>
    <Footer />
  </Site>
)

export default Layout
