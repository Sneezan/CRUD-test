import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import person from 'reducers/slice'
import { OuterWrapper } from './GlobalStyles'

export const ListOfSubmits = () => {
  const items = useSelector((store) => store.person.items);
  const dispatch = useDispatch();

  const onCompletedToggle = (id) => {
    dispatch(person.actions.toggleItem(id))
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <section>
          {items.map((singleUser) => {
            return (
              <div>
                <StyledCheckbox
                  type="checkbox"
                  checked={singleUser.toggled}
                  onChange={() => onCompletedToggle(`${singleUser.id}`)} />

                <Label htmlFor={(`${singleUser.id}`)} className={singleUser.toggled ? 'toggle-person' : ''}>{`${singleUser.fullname}`}</Label>
                <button type="button" onClick={() => dispatch(person.actions.updateItem(singleUser.id))}> edit</button>
                <button type="button" onClick={() => dispatch(person.actions.deleteItem(singleUser.id))}> delete</button>
              </div>
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

const StyledCheckbox = styled.input`
  cursor: pointer;
  appearance: none;
  color: black;
  width: 8em;
  height: 1em;
  border: none;
  place-content: center;
  position: absolute;
`