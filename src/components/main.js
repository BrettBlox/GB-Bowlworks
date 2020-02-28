import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Cover from '../styles/cover'

const WELCOME_QUERY = graphql`
  query welcomequery {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/src/welcome/welcome.md" } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`

const Main = () => (
  <StaticQuery
    query={WELCOME_QUERY}
    render={({ allMarkdownRemark }) => (
      <Cover text='center'>
        <h1>WELCOME TO GB BOWLWORKS</h1>
        {allMarkdownRemark.edges.map(edge => (
          <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
        ))}
      </Cover>
    )}
  />
)

export default Main
