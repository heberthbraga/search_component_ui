import React from 'react'

import styled from 'styled-components'
import Nav from '../navigation/Nav'
import Article from './Article'

const Content = ({ children, displayNav }) => (
  <Container>
    {displayNav &&
      <Nav />
    }
    <Article>
      {
        children
      }
    </Article>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-grow: 1;
` 

export default Content