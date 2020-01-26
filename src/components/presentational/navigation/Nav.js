import React from 'react'

import styled from 'styled-components'

const Nav = ({}) => (
  <Container>
    <NavBox>
    </NavBox>
  </Container>
)

const Container = styled.article`
  flex-shrink: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
`

const NavBox = styled.div`
  border-right: 1px solid #BEBEBE;
  height: 100%;
`

export default Nav