import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import FadeWrapper from '../components/fadeWrapper'
import Layout from '../components/layout'
import Inventory from '../components/inventory'
import StoreBanner from '../components/storeBanner'
import ShoppingCart from '../components/shoppingCart'

const InventoryWrapper = styled.div`
  margin: 1.25rem;
  display: grid;
  grid-gap: 1.875rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, auto));
  font-family: 'Cinzel', serif;

  @media only screen and (max-width: 800px) {
    margin: 0 auto;
    grid-gap: 15px;
    padding: 1.25rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, auto));
  }

  @media only screen and (max-width: 450px) {
    margin: 0 auto;
    grid-gap: 15px;
    padding: 1.25rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  }
`

const Store = () => (
  <FadeWrapper>
    <Helmet
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
    <Layout title='Store'>
      <ShoppingCart />
      <StoreBanner />
      <InventoryWrapper>
        <Inventory />
      </InventoryWrapper>
    </Layout>
  </FadeWrapper>
)

export default Store
