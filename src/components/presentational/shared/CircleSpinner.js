import React from 'react';
import styled, { keyframes } from 'styled-components';

const CircleSpinner = () => (
  <Wrapper>
    <Icon />
  </Wrapper>
)

const animation = keyframes`
  0%   { transform: rotate(0deg);   transform: rotate(0deg); }
  100% { transform: rotate(360deg); transform: rotate(360deg); }
`

const Wrapper = styled.div`
  display: block;
  position: absolute;
  z-index: 1002;
  left: 50%;
  top: 40%;

  pointer-events: none;
  transition: 350ms linear all;
`

const Icon = styled.div`
  width: 14px;
  height: 14px;
  border: solid 2px transparent;
  border-top-color: #036;
  border-left-color: #036;
  border-radius: 10px;
  animation: ${animation} 400ms linear infinite;
`

export default CircleSpinner