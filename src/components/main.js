import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Cover from '../styles/cover'

const WELCOME_QUERY = graphql`
  query welcomequery {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/src/cms/welcome/welcome.md" } }) {
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

const Main = () => (
  <StaticQuery
    query={WELCOME_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map((edge, i) => (
        <Cover text='center' key={`welcome__${i}`}>
          <h1>{edge.node.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
        </Cover>
      ))
    }
  />
)

export default Main
