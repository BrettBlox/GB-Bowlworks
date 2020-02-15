import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from './layout'

const PostWrapper = styled.div`
  margin: 0 auto;
  padding: 30px;
  display: flex;
  justify-content: center;
  font-family: 'Cinzel', serif;
`

const BlogPost = styled.div`
  margin: 0 auto;
  padding: 30px;
  border-radius: 4px;
  color: var(--color-light);

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

  h1 {
    font-size: 3rem;
    text-align: left;
    margin-top: 0;
  }

  img {
    border-radius: 4px;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
    width: 100%;
    height: auto;

    @media only screen and (max-width: 950px) {
      display: block;
      width: 100%;
      height: auto;
      margin-bottom: 20px;
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
    <Layout>
      <PostWrapper>
        <BlogPost>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <hr />
          <PostContent dangerouslySetInnerHTML={{ __html: html }} />
        </BlogPost>
      </PostWrapper>
    </Layout>
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
