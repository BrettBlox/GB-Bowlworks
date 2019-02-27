import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import '../styles/listing.css'

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
        <article key={node.frontmatter.slug} className='listing'>
          <Link className='listingLink' to={`/posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link className='read-more' to={`/posts${node.frontmatter.slug}`}>
            Read More &rarr;
          </Link>
        </article>
      ))
    }
  />
)

export default Listing
