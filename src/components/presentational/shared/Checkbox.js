import React from 'react'

import styled from 'styled-components'

const Checkbox = ({ className, label, checked, value, ...props }) => (
  <Container>
    <Label>
      <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} name={className} value={value} {...props} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      <LabelText>{label}</LabelText>
    </Label>
  </Container>
)

const Container = styled.div`
` 

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 4px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? '#ddd' : '#fff'};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid #000;
  display: flex;
  align-items: center;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Label = styled.label``

const LabelText = styled.span`
  padding-left: 5px;
  font-size: 12px;
` 

export default Checkbox