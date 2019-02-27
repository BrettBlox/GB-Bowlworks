import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import SEO from '../components/seo'
import Inventory from '../components/inventory'
import StoreBanner from '../components/storeBanner'

import '../styles/index.css'

const Store = () => (
  <>
    <div className="site">
      <SEO
        title="store"
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
      <Header />
      <StoreBanner />
      <div className="inventoryWrapper">
        <Inventory />
      </div>
      <Footer />
    </div>
  </>
)

export default Store
