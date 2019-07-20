import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import '../styles/inventory.css'

const STORE_QUERY = graphql`
  query StoreInventory {
    store: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/store/*.md" } }
      limit: 30
      sort: { order: DESC, fields: [frontmatter___id] }
    ) {
      edges {
        node {
          frontmatter {
            slug
            id
            price
            image
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

const checkSold = title => {
  const checkedTitle = title
    .toLowerCase()
    .split(' ')
    .includes('(sold)')
  return checkedTitle
}

const Inventory = () => (
  <StaticQuery
    query={STORE_QUERY}
    render={({ store }) =>
      store.edges.map(({ node }) => (
        <div key={node.frontmatter.id}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            link={[
              {
                href:
                  'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
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
          <article className="inventory">
            <img src={node.frontmatter.image} alt="bowl" />
            <Link className="listingLink" to={`/store${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <div className="priceWrapper">
              <h3>{`$${node.frontmatter.price}.00`}</h3>
            </div>
            <a
              href="#"
              className="snipcart-add-item buyBtn"
              data-item-id={node.frontmatter.id}
              data-item-price={node.frontmatter.price}
              data-item-image={node.frontmatter.image}
              data-item-name={node.frontmatter.title}
              data-item-description={node.frontmatter.body}
              data-item-url={
                'https://gbbowlworks.com' + '/store' + node.frontmatter.slug
              }
            >
              <button
                className="buy"
                disabled={checkSold(node.frontmatter.title)}
                style={
                  checkSold(node.frontmatter.title)
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
                {checkSold(node.frontmatter.title) ? 'SOLD' : 'BUY NOW'}
              </button>
            </a>
          </article>
        </div>
      ))
    }
  />
)

export default Inventory
