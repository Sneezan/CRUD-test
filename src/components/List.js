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
                <input
                  type="checkbox"
                  checked={singleUser.toggled}
                  onChange={() => onCompletedToggle(singleUser.id)} />

                <Label htmlFor={singleUser.id}>{`${singleUser.fullname}`}</Label>
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
:focus{
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