import React from 'react'

import styled from 'styled-components'
import NavComponent from '../../container/navigation/NavComponent'
import Article from './Article'

const Content = ({ children, displayNav }) => (
  <Container>
    {displayNav &&
      <NavComponent />
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