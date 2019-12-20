import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'

import Layout from './layout'

const StoreWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  padding: 30px;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  font-family: 'Cinzel', serif;
  margin: 30px;
  background-color: #dddfd4;
`

const StoreItemContent = styled.div`
  display: flex;

  h1 {
    margin: 0;
    color: hsl(0, 100%, 18%);
  }
`

const StoreItem = styled.div`
  border-radius: 4px;
  padding: 30px;
  display: grid;
  padding-bottom: 0;
  padding-top: 0;
  margin-top: 0;

  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-family: 'Quattrocento', serif;
    text-align: left;
    font-weight: bold;
    font-size: 1.25rem;
    justify-content: space-between;
    margin: 0;
  }
  h2 {
    font-size: 1.5rem;
  }
  button {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
    background-color: #3fb0ac;
    border-radius: 5px;
    border: none;
    padding: 10px 25px;
    width: 100%;
    height: 50px;
    font-family: 'Cinzel', serif;
    font-size: 20px;
    transition: all 0.3s;
    color: #fff;
    text-decoration: none;

    &:hover {
      background-color: hsl(0, 100%, 18%);
      cursor: pointer;
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.9);
    }
  }
`

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  img {
    margin: 0 1rem;
    width: 200px;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.9);
      transform: translateY(-10px) scale(1.2);
    }
  }
`

const StoreItemImage = styled.div`
  img {
    border-radius: 4px;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 650px;
    height: auto;
  }
`

const checkSold = title => {
  const checkedTitle = title
    .toLowerCase()
    .split(' ')
    .includes('(sold)')
  return checkedTitle
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        link={[
          {
            href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
            rel: 'stylesheet',
            type: 'text/css',
          },
        ]}
        script={[
          {
            type: 'text/javascript',
            url: '',
            id: 'snipcart',
            'data-api-key': 'NzZhZGMxMGEtMjZkMS00MzQ4LWE3YmMtNzY1MmE0NmRmYzI4NjM2ODQwNTIzODg1MTYwNjg4',
            src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
            async: true,
            defer: true,
          },
          {
            type: 'text/javascript',
            src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
            async: true,
            defer: true,
          },
        ]}
      />
      <StoreWrapper>
        <StoreItemImage>
          <LazyLoad offset={100}>
            <img src={frontmatter.image} alt='store-item' />
          </LazyLoad>
        </StoreItemImage>
        <StoreItemContent>
          <StoreItem>
            <h1>{frontmatter.title}</h1>
            <h2>{`$${frontmatter.price}.00`}</h2>
            <Body dangerouslySetInnerHTML={{ __html: html }} />
            <a
              href='#'
              className='snipcart-add-item buyBtn'
              data-item-id={frontmatter.id}
              data-item-price={frontmatter.price}
              data-item-image={frontmatter.image}
              data-item-name={frontmatter.title}
              data-item-description={frontmatter.body}
              data-item-url={`${'https://gbbowlworks.com' + '/store'}${frontmatter.slug}`}
            >
              <button
                type='button'
                className='buy'
                disabled={checkSold(frontmatter.title)}
                style={
                  checkSold(frontmatter.title)
                    ? {
                        backgroundColor: 'slategray',
                        transition: 'none',
                        transform: 'none',
                        boxShadow: 'none',
                        cursor: 'auto',
                      }
                    : null
                }
              >
                {checkSold(frontmatter.title) ? 'SOLD' : 'BUY NOW'}
              </button>
            </a>
          </StoreItem>
        </StoreItemContent>
      </StoreWrapper>
    </Layout>
  )
}

export const inventoryQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        id
        title
        image
        slug
        price
      }
    }
  }
`
