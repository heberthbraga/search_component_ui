import React from 'react'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { SearchButton } from '../shared/Button'


const SearchForm = ({ handleSubmit, searchTerm }) => (
  <Form
    onSubmit={handleSubmit}
  >
      <Input type="text" name="term" defaultValue={searchTerm} />
      <SearchButton>
        <Icon>
          <FontAwesomeIcon icon={faSearch} />
        </Icon>
      </SearchButton>
  </Form>
)

const Form = styled.form`
  align-items: center;
  display: flex;
  width: 100%;
`

const Input = styled.input`
  border: 1px solid transparent;
  border-radius: 4px 0px 0px 4px;
  flex: 1;
  font-size: 16px;
  font-weight: 200;
  height: 30px;
  min-width: 90px;
`

const Icon = styled.span``


export default SearchForm