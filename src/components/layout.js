import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

export default ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)
