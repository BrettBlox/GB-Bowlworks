import React from 'react'
import Layout from './src/components/layout'

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>

const onRouteUpdate = () => {
  if (typeof window !== `undefined`) {
    window.scrollTo(0, 0)
  }
}

const shouldUpdateScroll = args => false
