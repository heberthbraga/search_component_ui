import '@zendeskgarden/react-pagination/dist/styles.css';

import React from 'react'

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Pagination } from '@zendeskgarden/react-pagination';

import styled from 'styled-components'

const DefaultPagination = ({ currentPage, totalPages, onPageChange }) => (
  <Container>
    <ThemeProvider>
      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onChange={onPageChange} />
    </ThemeProvider>
  </Container>
)

const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
`

export default DefaultPagination