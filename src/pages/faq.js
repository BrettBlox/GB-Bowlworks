import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/index.css'
import '../styles/faq.css'

const Success = () => (
  <>
    <div className="site">
      <SEO
        title="faq"
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
      <div className="faq">
        <div className="faq__box">
          <h1>FAQs</h1>
          <hr />
          <br />
          {/* <Link id="successLink" to="/" type="button">
            BACK TO HOME PAGE
          </Link> */}
        </div>
      </div>
      <Footer />
    </div>
  </>
)

export default Success
