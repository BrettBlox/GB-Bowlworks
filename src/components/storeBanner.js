import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Cover from '../styles/cover'

const STORE_BANNER_QUERY = graphql`
  query storebannerquery {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/src/cms/store-banner/store-banner.md" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`

const StoreBanner = () => (
  <StaticQuery
    query={STORE_BANNER_QUERY}
    render={({ allMarkdownRemark }) => (
      <Cover text='center'>
        {allMarkdownRemark.edges.map((edge, i) => (
          <>
            <h1>{edge.node.frontmatter.title}</h1>
            <div key={`store__${i}`} dangerouslySetInnerHTML={{ __html: edge.node.html }} />
          </>
        ))}
      </Cover>
    )}
  />
)

export default StoreBanner
