import React from  'react'

import styled from 'styled-components'

const CustomCheckbox = ({ 
  name, 
  label, 
  value, 
  handleChange 
}) => (
  <Label>
    <CheckboxContainer>
      <Checkbox 
        name={name}  
        value={value} 
        onChange={handleChange} 
      />
    </CheckboxContainer>
    <LabelText>{label}</LabelText>
  </Label>
  
)

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid #000;
  display: flex;
  align-items: center;
`

const Label = styled.label`
  width: 100%;
`

const LabelText = styled.span`
  padding-left: 5px;
  font-size: 12px;
` 

export default CustomCheckbox