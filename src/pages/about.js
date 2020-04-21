import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import FadeWrapper from '../components/fadeWrapper'

import Layout from '../components/layout'
import Cover from '../styles/cover'

const About = styled.div`
  img {
    margin-right: 1.25rem;
    float: left;
    border-radius: 4px;
    box-shadow: 0 1rem 2rem var(--color-shadow);
    width: 600px;
    height: auto;

    @media only screen and (max-width: 950px) {
      display: block;
      width: 100%;
      height: auto;
      float: none;
      margin: 0 auto;
      margin-bottom: 1.25rem;
    }
  }

  p {
    @media only screen and (max-width: 550px) {
      line-height: 1.2;
    }
  }
`

const ABOUT_QUERY = graphql`
  query aboutquery {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/src/cms/about/about-page.md" } }) {
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

const AboutPage = () => (
  <FadeWrapper>
    <Layout title='About'>
      <StaticQuery
        query={ABOUT_QUERY}
        render={({ allMarkdownRemark }) =>
          allMarkdownRemark.edges.map(edge => (
            <Cover text='left'>
              <h1>{edge.node.frontmatter.title}</h1>
              <About dangerouslySetInnerHTML={{ __html: edge.node.html }} />
            </Cover>
          ))
        }
      />
    </Layout>
  </FadeWrapper>
)

export default AboutPage
