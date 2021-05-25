import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import FadeWrapper from '../components/fadeWrapper'
import SEO from '../components/seo'
import Cover from '../styles/cover'

const FAQWrapper = styled.div`
  h2 {
    font-size: 1.5rem;
    text-align: left;

    &::after {
      display: none;
    }
  }
`

const FAQ_QUERY = graphql`
  query faqquery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/cms/faq/faq.md" } }
    ) {
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

const FAQ = () => (
  <FadeWrapper>
    <SEO title='FAQ' />
    <StaticQuery
      query={FAQ_QUERY}
      render={({ allMarkdownRemark }) => (
        <Cover width='60vw' margin='1.875rem auto 0 auto'>
          <FAQWrapper>
            {allMarkdownRemark.edges.map((edge, i) => (
              <div key={`faq__${i}`}>
                <h1>{edge.node.frontmatter.title}</h1>
                <div
                  className='flow'
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            ))}
          </FAQWrapper>
        </Cover>
      )}
    />
  </FadeWrapper>
)

export default FAQ
