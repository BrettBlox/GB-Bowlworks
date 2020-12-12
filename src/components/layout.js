import React from 'react'
import styled from 'styled-components'

import '../styles/font.css'

import GlobalStyles from '../styles/Global'
import Header from './header'
import Footer from './footer'

const Site = styled.div`
  min-height: 100vh;

  @media only screen and (max-width: 710px) {
    padding-top: 50px;
  }
`

const Layout = ({ children }) => (
  <Site>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
    <Footer />
  </Site>
)

export default Layout
