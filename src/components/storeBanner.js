import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Cover from '../styles/cover'
import Filter from './filter'

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

const StoreBanner = ({ filter }) => (
  <StaticQuery
    query={STORE_BANNER_QUERY}
    render={({ allMarkdownRemark }) => (
      <Cover text='center'>
        {allMarkdownRemark.edges.map((edge, i) => (
          <div key={`store__${i}`}>
            <h1>{edge.node.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
          </div>
        ))}
        <Filter filter={filter} />
      </Cover>
    )}
  />
)

export default StoreBanner
