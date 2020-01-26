import React from 'react'

import styled from 'styled-components'

const Article = ({ children }) => (
  <Container>
    {
      children
    }
  </Container>
)

const Container = styled.article`
  flex-grow: 1;
`

export default Article