import '@zendeskgarden/react-pagination/dist/styles.css';

import React from 'react'

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Pagination } from '@zendeskgarden/react-pagination';

import styled from 'styled-components'

const DefaultPagination = ({ pagination, onPageChange }) => {
  const { page, total_pages } = pagination

  return (
    <Container>
      <ThemeProvider>
        <Pagination 
          totalPages={total_pages} 
          currentPage={page} 
          onChange={onPageChange} />
      </ThemeProvider>
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
`

export default DefaultPagination