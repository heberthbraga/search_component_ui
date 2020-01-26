import React from 'react'

import Layout from '../application/Layout'

import styled from  'styled-components'

const Home = ({}) => (
  <Layout 
    displayNav={false}
  >
    <Main>
      <Content>
        <Top>
          Welcome to my search component engine demonstration.
        </Top>
      </Content>
    </Main>
  </Layout>
)

const Main = styled.div`
  background: #EAEDED;
  margin: 0 auto;
  max-width: none;
  min-width: 1000px;
  overflow: hidden;
  height: 100%;
  padding: 0px 200px;
`

const Content = styled.section`
  display: flex;
  flex-direction: column;
  background: #fff !important;
  height: 100%;
`

const Top = styled.div`
  padding: 20px;
  flex-grow: 1;
` 

export default Home