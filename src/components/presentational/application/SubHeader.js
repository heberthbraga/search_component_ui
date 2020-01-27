import React from 'react'

import styled from 'styled-components'

import SelectBoxComponent from '../../container/shared/SelectBoxComponent'

const SubHeader = ({ results }) => (
  <Container>
    <ResultsBox>
      <ResultsText>
        {
          `Found ${results.length} result(s) for`
        }
      </ResultsText>
      <ResultsTarget>
        {
          results.term != '' ? `"${results.term}"` : 'all items.'
        }
      </ResultsTarget>
    </ResultsBox>
    <SortBox>
      <SortContainer>
        <SelectBoxComponent />
      </SortContainer>
    </SortBox>
  </Container>
)

const Container = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  box-shadow: 0 4px 6px -6px #222;
`

const ResultsBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const ResultsText = styled.span`
  font-size: 13px;
  font-style: normal!important;
  text-transform: none!important;
  padding-left: 15px;
`

const ResultsTarget = styled.span`
  font-size: 13px;
  color: #c45500 !important; 
  padding-left: 5px;
  font-weight: 700;
`

const SortBox = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
`

const SortContainer = styled.div`
  padding-right: 40px;
`

export default SubHeader