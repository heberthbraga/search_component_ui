import React from 'react'

import styled from 'styled-components'

import { sortOptions } from '../../../helpers'

const loadOptions = (options) => (
  options.map((opt) => {
    return (
      <option key={opt.value} value={opt.value}>{opt.name}</option>
    )
  })
)

const SelectBox = ({ selected, handleSelect }) => (
  <Select
    value={selected}
    name="sort"
    onChange={handleSelect}
  >
    <option value={sortOptions.default.value} hidden>
      {
        sortOptions.default.name
      }
    </option>
    {
      loadOptions(sortOptions.extra)
    }
  </Select>
)

const Select = styled.select`
  width: 100%;
  height: 20px;
  background-color: rgb(248, 248, 248);
  color: #111;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;
  border-radius: 3px;
  border-color: #8D9096;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default SelectBox