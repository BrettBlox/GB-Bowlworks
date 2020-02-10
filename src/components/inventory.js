import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

const InventoryList = styled.article`
  padding: 30px;
  padding-top: 0;
  background-color: #dddfd4;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: grid;
  height: 100%;
  box-sizing: border-box;

  img {
    margin: 0 auto;
    margin-top: 30px;
    height: 300px;
    max-width: 100%;
    border-radius: 4px;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);

    @media only screen and (max-width: 800px) {
      border-radius: 4px;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
      max-width: 100%;
      height: auto;
    }
  }

  h3 {
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }

  a {
    align-self: flex-end;
    text-decoration: none;

    button {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
      background-color: #3fb0ac;
      border-radius: 5px;
      border: none;
      padding: 10px 25px;
      width: 100%;
      height: 50px;
      font-family: 'Cinzel', serif;
      font-size: 20px;
      margin: 0 auto;
      color: #fff;
      transition: all 0.3s;

      &:hover {
        background-color: var(--blood);
        cursor: pointer;
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.9);
      }
    }
  }
`

const ListingLink = styled(Link)`
  h2 {
    text-align: left;
    font: 700 30px 'Cinzel', sans-serif;
    background-color: var(--blood);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, #d7a150, #d7a150 50%, var(--blood) 50%);
    background-size: 200% 100%;
    background-position: 100%;
    transition: all 0.3s;

    &:hover {
      background-position: 0%;
      transform: translateY(-3px);
      cursor: pointer;
    }
  }
`

const PriceWrapper = styled.div`
  @media only screen and (max-width: 800px) {
    margin-bottom: 0;
    padding: 0;
  }

  @media only screen and (max-width: 450px) {
    margin-bottom: 5px;
    padding: 0;
  }
`

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
          <InventoryList>
            <LazyLoad offset={100}>
              <img src={node.frontmatter.image} alt='bowl' />
            </LazyLoad>
            <ListingLink to={`/store${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </ListingLink>
            <PriceWrapper>
              <h3>{`$${node.frontmatter.price}.00`}</h3>
            </PriceWrapper>
            <a
              href='#'
              className='snipcart-add-item buyBtn'
              data-item-id={node.frontmatter.id}
              data-item-price={node.frontmatter.price}
              data-item-image={node.frontmatter.image}
              data-item-name={node.frontmatter.title}
              data-item-description={node.frontmatter.body}
              data-item-url={`${'https://gbbowlworks.com' + '/store'}${node.frontmatter.slug}`}
            >
              <button
                type='button'
                className='buy'
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
          </InventoryList>
        </div>
      ))
    }
  />
)

export default Inventory
