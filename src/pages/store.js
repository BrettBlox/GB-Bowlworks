import React from 'react'
import styled from 'styled-components'

import FadeWrapper from '../components/fadeWrapper'
import Layout from '../components/layout'
import Inventory from '../components/inventory'
import StoreBanner from '../components/storeBanner'

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
    <Layout title='Store'>
      <StoreBanner />
      <InventoryWrapper>
        <Inventory />
      </InventoryWrapper>
    </Layout>
  </FadeWrapper>
)

export default Store
