import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import Header from './header'
import Footer from './footer'

import '../styles/storeTemplate.css'

const checkSold = title => {
  const checkedTitle = title
    .toLowerCase()
    .split(' ')
    .includes('(sold)')
  return checkedTitle
}

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
            async: true,
            defer: true,
          },
          {
            type: 'text/javascript',
            src:
              'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
            async: true,
            defer: true,
          },
        ]}
      />
      <div className="site">
        <Header />
        <div className="storeWrapper">
          <div className="store-item-image">
            <LazyLoad offset={100}>
              <img src={frontmatter.image} alt="store-item" />
            </LazyLoad>
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
                  'https://gbbowlworks.com' + '/store' + frontmatter.slug
                }
              >
                <button
                  className="buy"
                  disabled={checkSold(frontmatter.title)}
                  style={
                    checkSold(frontmatter.title)
                      ? {
                          backgroundColor: 'slategray',
                          transition: 'none',
                          transform: 'none',
                          boxShadow: 'none',
                          cursor: 'auto',
                        }
                      : null
                  }
                >
                  {checkSold(frontmatter.title) ? 'SOLD' : 'BUY NOW'}
                </button>
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
