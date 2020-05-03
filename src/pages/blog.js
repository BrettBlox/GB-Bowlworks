import React from 'react'
import styled from 'styled-components'

import FadeWrapper from '../components/fadeWrapper'
import SEO from '../components/seo'
import Archive from '../components/archive'
import Listing from '../components/listing'

import Cover from '../styles/cover'

const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`

const Blog = () => (
  <FadeWrapper>
    <SEO title='Blog' />
    <Cover>
      <h1
        css={`
          max-width: 100vw;
        `}
      >
        GB Bowlworks Blog
      </h1>
    </Cover>
    <BlogWrapper>
      <Listing />
      <Archive />
    </BlogWrapper>
  </FadeWrapper>
)

export default Blog
