import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  color: #333;
`

export const SearchButton = styled(Button)`
  padding: 3px 12px;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background: #47cf73;
  border-radius: 0px 4px 4px 0px;
  height 30px;
  border: 1px solid #47cf73;
`