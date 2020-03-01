import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import FadeWrapper from './fadeWrapper'
import Layout from './layout'

const PostWrapper = styled.div`
  margin: 0 auto;
  padding: 1.875rem;
  display: flex;
  justify-content: center;
`

const BlogPost = styled.div`
  margin: 0 auto;
  padding: 1.875rem;
  border-radius: 4px;
  color: var(--color-light);

  h1 {
    color: var(--color-light);
    text-align: left;
    font-size: 3rem;
    margin-top: 0;
  }
  h2 {
    color: var(--color-light);
    text-align: left;
    margin-top: 1rem;
    font-weight: normal;
    &::after {
      content: '';
      display: block;
      height: 1px;
      background-color: var(--color-light);
      width: 100%;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }

  @media only screen and (max-width: 550px) {
    padding: 0px;
  }
`

const PostContent = styled.div`
  border-radius: 4px;
  padding-top: 10px;
  margin: 0 auto;
  max-width: 650px;
  color: var(--color-light);
  font-size: 1.2rem;
  padding: 1rem 0;
  text-align: left;
  font-weight: bold;

  img {
    border-radius: 4px;
    box-shadow: 0 1rem 2rem var(--color-shadow);
    width: 100%;
    height: auto;
    margin: 1rem 0;

    @media only screen and (max-width: 950px) {
      display: block;
      width: 100%;
      height: auto;
      margin-bottom: 1.25rem;
      margin-left: 0;
      margin-right: 0;
    }
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <FadeWrapper>
      <Layout>
        <PostWrapper>
          <BlogPost>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <PostContent dangerouslySetInnerHTML={{ __html: html }} />
          </BlogPost>
        </PostWrapper>
      </Layout>
    </FadeWrapper>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
    }
  }
`
