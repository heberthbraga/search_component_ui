import React from 'react'
import styled from 'styled-components'

import SearchComponent from '../../container/products/SearchComponent'
import LogoComponent from '../../container/application/LogoComponent'

import SignInNav from '../navigation/SignInNav'

const Header = ({}) => (
  <Container>
    <NavLeft>
      <LogoComponent />
    </NavLeft>
    <SearchBar>
      <SearchComponent />
    </SearchBar>
    <NavRight>
      <SignInNav />
    </NavRight>
  </Container>
)

const Container = styled.header`
  background-color: #000;
  color: #fff;
  height: 60px;
  display: flex;
  align-items: flex-start;
  width: 100%;
`

const NavLeft = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const SearchBar = styled.div`
  width: 70%;
  height: 100%;
  padding: 0px 30px;
  display: flex;
  align-items: center;
`

const NavRight = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: flex-end;
`

export default Header