import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import SEO from '../components/seo'
import Archive from '../components/archive'
import Listing from '../components/listing'

import '../styles/index.css'
import '../styles/blog.css'

const Blog = () => (
  <>
    <div className='site'>
      <SEO
        title='blog'
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
      <div className='blogWrapper'>
        <div className='listingWrapper'>
          <Listing />
        </div>
        <div className='archiveWrapper'>
          <Archive />
        </div>
      </div>
    </div>
    <Footer />
  </>
)

export default Blog
