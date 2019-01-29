import React from 'react'
import SEO from '../components/seo'

import Header from '../components/header'
import Main from '../components/main'
import Gallery from '../components/gallery'
import Footer from '../components/footer'

import '../styles/index.css'

const IndexPage = () => (
  <>
    <div className='site'>
      <SEO
        title='home'
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
          `etsy`
        ]}
      />
      <Header />
      <Main />
      <Gallery />
    </div>
    <Footer />
  </>
)

export default IndexPage
