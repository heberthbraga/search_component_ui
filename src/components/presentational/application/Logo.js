import React from 'react'

import styled from 'styled-components'

import reactLogo from '../../../assets/images/React-icon.svg'

const Logo = ({ handleClick }) => (
  <WrapperLink
    onClick={handleClick}
  >
    <LogoImage />
  </WrapperLink>
)

const WrapperLink = styled.span`
  display: inline-block;
  cursor: pointer;
`

const LogoImage = styled.img.attrs({ src: reactLogo })`
  height: 75px;
  width: 75px;
  padding-bottom: 12px;
`

export default Logo