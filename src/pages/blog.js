import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Archive from '../components/archive'
import Listing from '../components/listing'

const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;

    .archiveWrapper {
      display: none;
    }
  }
`

const Blog = () => (
  <Layout title='Blog'>
    <BlogWrapper>
      <div>
        <Listing />
      </div>
      <div className='archiveWrapper'>
        <Archive />
      </div>
    </BlogWrapper>
  </Layout>
)

export default Blog
