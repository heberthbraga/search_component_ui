import React from 'react'

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = ({}) => (
  <Container>
    <FontAwesomeIcon icon={faCopyright} />
    <Copyright>
      2020, Heberth Braga.
    </Copyright>
  </Container>
)

const Container = styled.footer`
  background-color: #232f3e;
  color: #999;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center; 
`

const Copyright = styled.span`
  font-size: 12px;
  margin-left: 10px;
`

export default Footer