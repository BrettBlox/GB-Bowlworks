import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'

import '../styles/font.css'
import GlobalStyles from '../styles/Global'
import SEO from './seo'
import Header from './header'
import Footer from './footer'

const Site = styled.div`
  min-height: 100vh;

  @media only screen and (max-width: 710px) {
    padding-top: 50px;
  }
`

const Layout = ({ children, title }) => (
  <Site>
    <SEO
      title={title}
      keywords={[
        `about`,
        `woodworking`,
        `jenks`,
        `oklahoma`,
        `fine woodworking`,
        `woodturning`,
        `woodworker`,
        `craftsmanship`,
        `art`,
        `semengted`,
        `wood`,
        `art`,
        `craft`,
        `handmade`,
        `etsy`,
      ]}
    />
    <GlobalStyles />
    <Header />
    <main>{children}</main>
    <Footer />
  </Site>
)

export default Layout
