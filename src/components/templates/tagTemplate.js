import React, { useState } from 'react'
import { graphql, Link, navigate } from 'gatsby'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'
import slugify from 'slugify'

import FadeWrapper from '../fadeWrapper'
import SEO from '../seo'
import ShoppingCart from '../shoppingCart'
import StoreBanner from '../storeBanner'
import { InventoryWrapper } from '../../pages/store'
import { InventoryList, ListingLink, PriceWrapper } from '../inventory'
import Filter from '../filter'

const checkSold = title => {
  const checkedTitle = title
    .toLowerCase()
    .split(' ')
    .includes('(sold)')
  return checkedTitle
}

const Tags = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data
  const { tag } = pageContext
  const seoTag = tag.charAt(0).toUpperCase() + tag.slice(1)
  let filter

  if (tag === 'salad') {
    filter = 'salad'
  } else if (tag === 'closed form') {
    filter = 'closed'
  } else if (tag === 'open form') {
    filter = 'open'
  } else if (tag === 'misc') {
    filter = 'misc'
  } else if (tag === 'lidded') {
    filter = 'lidded'
  } else {
    filter = 'bowlworks'
  }

  return (
    <FadeWrapper>
      <SEO title={seoTag} />
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
            'data-api-key': 'NzZhZGMxMGEtMjZkMS00MzQ4LWE3YmMtNzY1MmE0NmRmYzI4NjM2ODQwNTIzODg1MTYwNjg4',
            src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
            async: true,
            defer: true,
          },
          {
            type: 'text/javascript',
            src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
            async: true,
            defer: true,
          },
        ]}
      />
      <ShoppingCart />
      <StoreBanner />
      <Filter title='Filter Items' filter={filter} />
      <InventoryWrapper>
        {allMarkdownRemark.edges.map(edge => (
          <div key={edge.node.frontmatter.id}>
            <InventoryList>
              <LazyLoad offset={100}>
                <img src={edge.node.frontmatter.image} alt='bowl' />
              </LazyLoad>
              <ListingLink to={`/store${edge.node.frontmatter.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
              </ListingLink>
              <PriceWrapper>
                <p>{`$${edge.node.frontmatter.price}.00`}</p>
              </PriceWrapper>
              <p>
                Tag:{' '}
                <Link to={`/store/${slugify(edge.node.frontmatter.tag, { replacement: '-', lower: true })}`}>
                  {edge.node.frontmatter.tag}
                </Link>
              </p>
              <button
                type='button'
                className='snipcart-add-item buyBtn'
                data-item-id={edge.node.frontmatter.id}
                data-item-price={edge.node.frontmatter.price}
                data-item-image={edge.node.frontmatter.image}
                data-item-name={edge.node.frontmatter.title}
                data-item-description={edge.node.frontmatter.body}
                data-item-url={`https://gbbowlworks.com/store${edge.node.frontmatter.slug}`}
                disabled={checkSold(edge.node.frontmatter.title)}
                style={
                  checkSold(edge.node.frontmatter.title)
                    ? {
                        backgroundColor: 'slategrey',
                        transition: 'none',
                        transform: 'none',
                        boxShadow: 'none',
                        cursor: 'auto',
                      }
                    : null
                }
              >
                {checkSold(edge.node.frontmatter.title) ? 'SOLD' : 'BUY NOW'}
              </button>
            </InventoryList>
          </div>
        ))}
      </InventoryWrapper>
    </FadeWrapper>
  )
}

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tag: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            id
            title
            image
            slug
            price
            tag
          }
          html
        }
      }
    }
  }
`

export default Tags
