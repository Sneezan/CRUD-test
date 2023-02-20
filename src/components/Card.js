import React from 'react'
import { Filter } from './Filter'
import { InputFields } from './Input'
import { ListOfSubmits } from './List'

export const Card = () => {
  return (
    <Frame>
      <Filter />
      <InputFields />
      <ListOfSubmits />
    </Frame>
  )
}

