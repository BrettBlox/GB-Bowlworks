import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

import '../styles/storeTemplate.css'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        link={[
          {
            href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
            rel: 'stylesheet',
            type: 'text/css',
          },
        ]}
        script={[
          {
            type: 'text/javascript',
            url: '',
            id: 'snipcart',
            'data-api-key':
              'NzZhZGMxMGEtMjZkMS00MzQ4LWE3YmMtNzY1MmE0NmRmYzI4NjM2ODQwNTIzODg1MTYwNjg4',
            src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
          },
          {
            type: 'text/javascript',
            src:
              'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
          },
        ]}
      />
      <div className="site">
        <Header />
        <div className="storeWrapper">
          <div className="store-item-image">
            <img src={frontmatter.image} alt="store-item" />
          </div>
          <div className="store-item-content">
            <div className="store-item">
              <h1>{frontmatter.title}</h1>
              <h2>{`$${frontmatter.price}.00`}</h2>
              <div
                className="body"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <a
                href="#"
                className="snipcart-add-item buyBtn"
                data-item-id={frontmatter.id}
                data-item-price={frontmatter.price}
                data-item-image={frontmatter.image}
                data-item-name={frontmatter.title}
                data-item-description={frontmatter.body}
                data-item-url={
                  'http://snipcart-gatsby.netlify.com' + frontmatter.slug
                }
              >
                <button className="buy">BUY NOW</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export const inventoryQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        id
        title
        image
        slug
        price
      }
    }
  }
`
