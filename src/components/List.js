import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import person from 'reducers/slice'
import { OuterWrapper } from './GlobalStyles'

export const ListOfSubmits = () => {
  const items = useSelector((store) => store.person.items);
  const [editable, setEditable] = useState(false);

  const dispatch = useDispatch();

  const onCompletedToggle = (id) => {
    dispatch(person.actions.toggleItem(id))
  }

  const editTask = () => {
    setEditable(true);
  };

  const savingText = () => {
    setEditable(false);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <section>
          {items.map((singleUser) => {
            return (
              <ClickableField contentEditable={editable}>
                <StyledCheckbox
                  type="checkbox"
                  checked={singleUser.toggled}
                  onChange={() => onCompletedToggle(`${singleUser.fullname}`)} />

                <Label htmlFor={(`${singleUser.id}`)} className={singleUser.toggled ? 'toggle-person' : ''}>{`${singleUser.fullname}`}</Label>
                <ButtonWrap>
                  {!editable && (
                    <button
                      type="button"
                      onClick={editTask}
                      onKeyDown={(e) => e.key === 'Enter' && editTask()}>
                  Edit
                    </button>
                  )}
                  {editable && (
                    <button
                      type="button"
                      onClick={savingText}
                      onKeyDown={(e) => e.key === 'Enter' && savingText()}>
                  Update
                    </button>
                  )}
                </ButtonWrap>
                <DeleteWrap>
                  <button type="button" onClick={() => dispatch(person.actions.deleteItem(singleUser.id))}> delete</button>
                </DeleteWrap>
              </ClickableField>
            );
          })}
        </section>
      </InnerWrapper>
    </Wrapper>
  )
}

/* <div onClick={() => editTodo(idx)}>{selected === idx ? text : todo}</div> */

const Wrapper = styled(OuterWrapper)`
display: flex;
position: relative;
`

const InnerWrapper = styled.div`
display: flex;
position: absolute;
left: 80px;
top: 0;
`

const ButtonWrap = styled.div`
display: flex;
position: absolute;
left: 0px;
bottom: -80px;
`

const Label = styled.label`
.singleUser.toggled{
  background-color: red;
}
`
// const Form = styled.form`
// display: grid;
// `
// const Label = styled.label`
// display: flex;
// padding: 10px;
// `

const ClickableField = styled.div`
cursor: pointer;
width: 190px;
height: 25px;
display: grid;

&:focus{
  background-color: lightblue;
}
`
const DeleteWrap = styled.div`
display: flex;
width: 40px;
position: relative;
left: 210px;
top: -20px;


`

const StyledCheckbox = styled.input`
  appearance: none;
  color: black;
  height: 1em;
  border: none;
  place-content: center;
  position: absolute;
`