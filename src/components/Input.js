import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import person from 'reducers/slice'
import { OuterWrapper } from './GlobalStyles'

export const InputFields = () => {
  const dispatch = useDispatch()
  const [newName, setNewName] = useState('')
  const [newSurname, setNewSurname] = useState('')
  const [editable, setEditable] = useState(false);
  // const [editedPerson, setEditedPerson] = useState('')
  const selected = useSelector((store) => store.person.selectedPerson);

  const handleSubmit = (event) => {
    event.preventDefault();
    const postUser = {
      id: uniqid(),
      fullname: [newSurname, newName],
      name: [newName],
      surname: [newSurname]
    };
    dispatch(person.actions.addItem(postUser))
    setNewName('');
    setNewSurname('');
  };

  useEffect(() => {
    setNewName(selected[1]);
    setNewSurname(selected[0]);
  }, [selected])

  const handleChange = (event) => {
    setEditable(event.target.value);
  };

  const editItem = () => {
    setEditable(true);
  };

  const savingText = () => {
    setEditable(false);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <div
          contentEditable={editable}>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">
              <input
                type="text"
                name="name"
                value={newName}
                onInput={handleChange}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="name" />
            </Label>
            <Label htmlFor="surname">
              <input
                type="text"
                name="surname"
                value={newSurname}
                onInput={handleChange}
                onChange={(e) => setNewSurname(e.target.value)}
                placeholder="surname" />
            </Label>
          </Form>
        </div>
      </InnerWrapper>
      <ButtonWrap>
        {!editable && (
          <button
            type="button"
            onClick={editItem}
            onKeyDown={(e) => e.key === 'Enter' && editItem()}>
                  Edit
          </button>
        )}
        {editable && (
          <button
            type="submit"
            onClick={savingText}
            onKeyDown={(e) => e.key === 'Enter' && savingText()}>
                  Update
          </button>
        )}
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
