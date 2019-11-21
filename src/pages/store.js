import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Inventory from '../components/inventory'
import StoreBanner from '../components/storeBanner'

const InventoryWrapper = styled.div`
  margin: 20px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(400px, auto));
  font-family: 'Cinzel', serif;
`

const Store = () => (
  <Layout title="Store">
    <StoreBanner />
    <InventoryWrapper>
      <Inventory />
    </InventoryWrapper>
  </Layout>
)

export default Store
