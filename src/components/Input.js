import React, { useState } from 'react'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import person from 'reducers/slice'
import { OuterWrapper } from './GlobalStyles'

export const InputFields = () => {
  const dispatch = useDispatch()
  const [NewName, setNewName] = useState('')
  const [NewSurname, setNewSurname] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const postUser = {
      id: uniqid(),
      fullname: [NewSurname, NewName],
      completed: false
    };
    dispatch(person.actions.addItem(postUser))
    setNewName('');
    setNewSurname('');
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">
            <input
              type="text"
              name="name"
              value={NewName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="name" />
          </Label>
          <Label htmlFor="surname">
            <input
              type="text"
              name="surname"
              value={NewSurname}
              onChange={(e) => setNewSurname(e.target.value)}
              placeholder="surname" />
          </Label>
        </Form>
      </InnerWrapper>
      <ButtonWrap>
        <button type="submit" onClick={handleSubmit}> Create </button>
        {/* <button type="submit"> Update </button> */}
      </ButtonWrap>
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
left: 200px;
top: 110px;
`
const ButtonWrap = styled(OuterWrapper)`
display: flex;
position: absolute;
top: 240px;
left: 250px;
`

const Form = styled.form`
display: grid;
`
const Label = styled.label`
display: flex;
padding: 10px;
`
// const Name = styled.p`
// padding: 0px;
// `
