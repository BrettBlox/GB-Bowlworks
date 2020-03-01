import React from 'react'

import FadeWrapper from '../components/fadeWrapper'
import Layout from '../components/layout'
import Main from '../components/main'
import Events from '../components/events'
import Gallery from '../components/gallery'

const IndexPage = () => (
  <FadeWrapper>
    <Layout title='Home'>
      <Main />
      <Events />
      <Gallery />
    </Layout>
  </FadeWrapper>
)

export default IndexPage
