import React from 'react'
import styled from 'styled-components'
// import person from 'reducers/slice'
// import { useSelector, useDispatch } from 'react-redux';
import { OuterWrapper } from './GlobalStyles'

export const Filter = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <input
          type="search"
          placeholder="filter" />
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(OuterWrapper)`
display: flex;
position: relative;
`

const InnerWrapper = styled.div`
display: flex;
position: absolute;
left: 80px;
top: 80px;
`

