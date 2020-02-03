import React, { Fragment } from 'react'

import styled from 'styled-components'

import Layout from '../../application/Layout'
import CircleSpinner from '../../shared/CircleSpinner'
import DefaultPagination from '../../shared/DefaultPagination'

import { handleSearchInfo } from '../../../../helpers'

const listItems = (products) => {
  return products.data.map((product) => {
    return (
      <GridItem key={product.id}>
        <GridItemContent>
          <h3>{product.attributes.title}</h3>
          <p>${product.attributes.price}</p>
          <p>{product.attributes.description}</p>
        </GridItemContent>
      </GridItem>
    )
  })
}

const List = ({ products, action, searchTerm, onPageChange }) => {
  const searchInfo = handleSearchInfo(products, searchTerm)
  const handleAction = {
    path: action,
    info: searchInfo
  }

  return (
    <Layout
      displayNav={true}
      handleAction={handleAction}
    >
      <Container>
        {!products ?
          <CircleSpinner />
        :
          <Fragment>
            <GridRow>
              {
                listItems(products)
              }
            </GridRow>
            <DefaultPagination 
              pagination={products.pagination}
              onPageChange={onPageChange}
            />
          </Fragment>
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