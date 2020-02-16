import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const ListingWrapper = styled.article`
  margin: 1.875rem 1.25rem 0 1.25rem;
  padding: 1.5rem;
  background-color: var(--color-light);
  box-shadow: 0px 3px 10px var(--color-shadow);
  border-radius: 4px;
  display: grid;
  grid-gap: 1rem;

  p:first-of-type {
    font-weight: bold;
  }

  p {
    text-align: left;
    margin: 0;
    padding: 0;
  }

  @media only screen and (max-width: 550px) {
    margin: 1.875rem 1.25rem;
  }
`

const ListingLink = styled(Link)`
  text-decoration: none;

  h2 {
    margin-bottom: 0;
    text-align: left;
    font: 700 35px 'Cinzel', sans-serif;
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
    }
  }
`

const ReadMore = styled(Link)`
  text-align: left;
  font: 700 1.25rem 'Cinzel', sans-serif;
  background-color: var(--blood);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, var(--gold), var(--gold) 50%, var(--blood) 50%);
  background-size: 200% 100%;
  background-position: 100%;
  transition: all 0.3s;
  text-decoration: none;
  text-decoration-color: var(--blood);
  transition: all 0.2s;

  &:hover {
    background-position: 0%;
    transform: translateY(-3px);
  }
`

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/posts/*.md" } }
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <ListingWrapper key={node.frontmatter.slug}>
          <ListingLink to={`/posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </ListingLink>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <ReadMore to={`/posts${node.frontmatter.slug}`}>Read More &rarr;</ReadMore>
        </ListingWrapper>
      ))
    }
  />
)

export default Listing
