import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import FadeWrapper from '../components/fadeWrapper'
import Layout from '../components/layout'
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
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/src/cms/faq/faq.md" } }) {
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
    <Layout title='FAQ'>
      <StaticQuery
        query={FAQ_QUERY}
        render={({ allMarkdownRemark }) => (
          <Cover width='60vw' margin='1.875rem auto 0 auto'>
            <FAQWrapper>
              {allMarkdownRemark.edges.map((edge, i) => (
                <>
                  <h1>{edge.node.frontmatter.title}</h1>
                  <div className='flow' key={`faq__${i}`} dangerouslySetInnerHTML={{ __html: edge.node.html }} />
                </>
              ))}
            </FAQWrapper>
          </Cover>
        )}
      />
    </Layout>
  </FadeWrapper>
)

export default FAQ
