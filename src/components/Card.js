import React from 'react'
import styled from 'styled-components'
import { Filter } from './Filter'
import { InputFields } from './Input'
import { ListOfSubmits } from './List'

export const Card = () => {
  return (
    <Frame>
    This is the card!
      <Filter />
      <InputFields />
      <ListOfSubmits />
    </Frame>
  )
}

const Frame = styled.div`
width: 700px;
height: 500px;
border: 2px solid black; 
`
