import React from 'react'

import styled from 'styled-components'

import Layout from '../../application/Layout'
import CircleSpinner from '../../shared/CircleSpinner'

const listItems = (products) => {
  return products.map((p) => {
    return (
      <GridItem key={p.id}>
        <GridItemContent>
          <h3>{p.title}</h3>
          <p>${p.price}</p>
          <p>{p.description}</p>
        </GridItemContent>
      </GridItem>
    )
  })
}

const List = ({ products }) => {
  return (
    <Layout
      displayNav={true}
    >
      <Container>
        {!products ?
          <CircleSpinner />
        :
          <GridRow>
            {
              listItems(products)
            }
          </GridRow>
        }
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  margin: 0 auto;
`

const GridRow = styled.ul`
  padding: 10px;
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`

const GridItem = styled.li`
  background-color: #ccc;
  display: flex;
  padding: 0.5em;
  margin-bottom: 20px;
`

const GridItemContent = styled.div`
  width: 100%;
`

export default List