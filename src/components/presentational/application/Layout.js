import React from 'react'

import styled, { createGlobalStyle } from 'styled-components'

import Header from './Header'
import SubHeader from './SubHeader'
import Content from './Content'
import Footer from './Footer'

const Layout = ({ children, displayNav, handleAction }) => (
  <Container>
    <Body />
    <Header />
    {(handleAction && handleAction.path === 'search') &&
      <SubHeader 
        results={handleAction.info}
      />
    }
    <Content 
      displayNav={displayNav}
    >
      {
        children
      }
    </Content>
    <Footer />
  </Container>
)

const Body = createGlobalStyle`
  body {
    font-family: "Amazon Ember",Arial,sans-serif;
    margin: 0;
    height: 100%;
  }
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export default Layout