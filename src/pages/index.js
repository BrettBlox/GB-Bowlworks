import React from 'react'

import Layout from '../components/layout'
import Main from '../components/main'
// import Events from '../components/events'
import Gallery from '../components/gallery'


const IndexPage = () => (
  <Layout title="Home">
    <Main />
    {/* <Events /> */}
    <Gallery />
  </Layout>
)

export default IndexPage
