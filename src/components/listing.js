import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const ListingWrapper = styled.article`
  margin: 30px;
  padding: 20px;
  padding-top: 0;
  font-family: 'Cinzel';
  background-color: #dddfd4;
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 2);
  border-radius: 4px;
  display: grid;
  grid-gap: 30px;

  p {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 550px) {
    margin: 30px 20px;
  }
`

const ListingLink = styled(Link)`
  text-decoration: none;

  h2 {
    margin-bottom: 0;
    text-align: left;
    font: 700 35px 'Cinzel', sans-serif;
    background-color: hsl(0, 100%, 18%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, #d7a150, #d7a150 50%, hsl(0, 100%, 18%) 50%);
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
  font: 700 20px 'Cinzel', sans-serif;
  background-color: hsl(0, 100%, 18%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #d7a150, #d7a150 50%, hsl(0, 100%, 18%) 50%);
  background-size: 200% 100%;
  background-position: 100%;
  transition: all 0.3s;
  text-decoration: none;
  text-decoration-color: hsl(0, 100%, 18%);
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
