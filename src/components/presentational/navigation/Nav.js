import React from 'react'

import styled from 'styled-components'

import CheckboxComponent from '../../container/shared/CheckboxComponent'
import { priceOptions } from '../../../helpers'

const loadPriceOptions = () => {
  return priceOptions.map((opt) => {
    return (
      <CheckboxComponent key={opt.id} name="price" label={opt.label} value={opt.id} />
    )
  })
}

const Nav = ({ countries }) => (
  <Container>
    <NavBox>
      <PriceFilterBox>
        <Title>Price</Title>
        <Content>
          {
            loadPriceOptions()
          }
        </Content>
      </PriceFilterBox>
      <CountryFilterBox>
        <Title>Country</Title>
        <Content>
          {
            countries.map((country) => {
              return (
                <CheckboxComponent 
                  key={country.id} 
                  name="country_code"
                  label={country.name} 
                  value={country.code}
                />
              )
            })
          }
        </Content>
      </CountryFilterBox>
    </NavBox>
  </Container>
)

const Container = styled.article`
  flex-shrink: 0;
  width: 220px;
  padding: 10px 0px;
`

const NavBox = styled.div`
  border-right: 1px solid #BEBEBE;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const PriceFilterBox = styled.div`
  padding: 10px;
`

const CountryFilterBox = styled.div`
  padding: 10px;
`

const Title = styled.span`
  font-size: 14px;
  font-weight: 700;
`

const Content = styled.div`
  padding-top: 5px;
`

export default Nav