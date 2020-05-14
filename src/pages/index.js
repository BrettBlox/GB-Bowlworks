import React from 'react'

import FadeWrapper from '../components/fadeWrapper'
import SEO from '../components/seo'
import Main from '../components/main'
import Events from '../components/events'
import Gallery from '../components/gallery'

const IndexPage = () => (
  <FadeWrapper>
    <SEO title='Home' />
    <Main />
    {/* <Events /> */}
    <Gallery />
  </FadeWrapper>
)

export default IndexPage
