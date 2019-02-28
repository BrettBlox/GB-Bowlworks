import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/index.css'
import '../styles/success.css'

const Success = () => (
  <>
    <div className="site">
      <SEO
        title="success"
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
      <div className="successWrapper">
        <div className="success">
          <h1>Success!</h1>
          <hr />
          <h2>
            Thank you for your message!
            <br />
            <br /> I will get back to you as soon as possible.
          </h2>
          <br />
          <div className="success__link">
            <Link id="successLink" to="/" type="button">
              BACK TO HOME PAGE &rarr;
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
)

export default Success
