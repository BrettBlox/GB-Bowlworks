import React from 'react'
import { StaticQuery, graphql, Link, navigate } from 'gatsby'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'

import FadeLink from './fadeLink'
import Filter from './filter'

export const InventoryList = styled.article`
  padding: 1.875rem;
  padding-top: 0;
  background-color: var(--color-light);
  box-shadow: 0 1rem 2rem var(--color-shadow);
  border-radius: 4px;
  display: grid;
  height: 100%;
  box-sizing: border-box;

  a {
    color: var(--blood);
    cursor: pointer;
  }

  img {
    margin: 0 auto;
    margin-top: 1.875rem;
    height: 300px;
    max-width: 100%;
    border-radius: 4px;
    box-shadow: 0 1rem 2rem var(--color-shadow);

    @media only screen and (max-width: 800px) {
      border-radius: 4px;
      box-shadow: 0 1rem 2rem var(--color-shadow);
      max-width: 100%;
      height: auto;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: bold;
    padding: 0;
  }

  button {
    align-self: flex-end;
    text-decoration: none;
    box-shadow: 0 1rem 2rem var(--color-shadow);
    background-color: var(--baby);
    border-radius: 5px;
    border: none;
    padding: 10px 25px;
    width: 100%;
    height: 50px;
    font-family: 'Cinzel', serif;
    font-size: 1.25rem;
    margin: 0 auto;
    color: #fff;
    transition: all 0.3s;

    &:hover {
      background-color: var(--blood);
      cursor: pointer;
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.7);
    }
  }
`

export const ListingLink = styled(FadeLink)`
  h2 {
    text-align: left;
    font: 700 1.5rem 'Cinzel', sans-serif;
    background-color: var(--blood);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, var(--gold), var(--gold) 50%, var(--blood) 50%);
    background-size: 200% 100%;
    background-position: 100%;
    transition: all 0.3s;

    &:hover {
      background-position: 0%;
      transform: translateY(-3px);
      cursor: pointer;
    }

    @media screen and (max-width: 501px) {
      font-size: 1.25rem;
    }
  }
`

export const PriceWrapper = styled.div`
  p {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    color: black;
  }

  @media only screen and (max-width: 501px) {
    margin-bottom: 5px;
    p {
      font-size: 1.25rem;
    }
  }
`

const STORE_QUERY = graphql`
  query StoreInventory {
    store: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/cms/store/*.md" } }
      limit: 30
      sort: { order: DESC, fields: [frontmatter___date] }
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
            tag
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
          <InventoryList>
            <LazyLoad offset={100}>
              <img src={node.frontmatter.image} alt='bowl' />
            </LazyLoad>
            <ListingLink to={`/store${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </ListingLink>
            <PriceWrapper>
              <p>{`$${node.frontmatter.price}.00`}</p>
            </PriceWrapper>
            <p
              css={`
                text-transform: uppercase;
              `}
            >
              Category:{' '}
              <Link
                css={`
                  &:hover {
                    text-decoration: underline;
                  }
                `}
                to={`/store/${node.frontmatter.tag}`}
              >
                {node.frontmatter.tag}
              </Link>
            </p>
            <button
              type='button'
              className='snipcart-add-item buyBtn'
              data-item-id={node.frontmatter.id}
              data-item-price={node.frontmatter.price}
              data-item-image={node.frontmatter.image}
              data-item-name={node.frontmatter.title}
              data-item-description={node.frontmatter.body}
              data-item-url={`https://gbbowlworks.com/store${node.frontmatter.slug}`}
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
          </InventoryList>
        </div>
      ))
    }
  />
)

export default Inventory
