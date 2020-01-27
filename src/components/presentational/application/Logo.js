import React from 'react'

import styled from 'styled-components'

import reactLogo from '../../../assets/images/React-icon.svg'

const Logo = ({ handleClick }) => (
  <WrapperLink
    onClick={handleClick}
  >
    <LogoImage src={reactLogo} />
  </WrapperLink>
)

const WrapperLink = styled.span`
  display: inline-block;
  cursor: pointer;
`

const LogoImage = styled.img`
  height: 75px;
  width: 75px;
  padding-bottom: 12px;
`

export default Logo