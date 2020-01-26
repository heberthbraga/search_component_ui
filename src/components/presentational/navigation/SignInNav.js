import React from 'react'

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const SignInNav = ({}) => (
  <SignInBox>
    <SignInIcon>
      <FontAwesomeIcon icon={faSignInAlt} size="lg" />
    </SignInIcon>
    <SignInText>
      Sign In
    </SignInText>
  </SignInBox>
)

const SignInBox = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  cursor: pointer;
`

const SignInIcon = styled.span`
  background-color: #232f3e;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 15px;
`

const SignInText = styled.span`
  color: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 18px;
  line-height: 15px;
  font-weight: 700;
  font-family: "Amazon Ember",Arial,sans-serif;
`

export default SignInNav