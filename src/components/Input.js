/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPersonId } from 'reducers/personSlice';
import { deletePerson } from 'reducers/personSlice';
import { addPerson, editPerson } from 'reducers/personSlice';
import styled from 'styled-components'
import uniqid from 'uniqid';
 
export const InputFields = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const dispatch = useDispatch();
  const selectedId = useSelector((store) => store.personSlice.selectedPersonId)
  const people = useSelector((store) => store.personSlice.people);

  const submitPerson = (e) => {
  e?.preventDefault(); 
  if (selectedId) {
    const updatedPerson = {id:selectedId, firstName, lastName}
    dispatch(editPerson(updatedPerson))
  } else {
    const newPerson = {id:uniqid(), firstName, lastName}
    dispatch(addPerson(newPerson))
  }
  setLastName('');
  setFirstName(''); 
  }


  useEffect(() => {
   if(selectedId){
    const index = people.findIndex((p) => p.id === selectedId);
    if(index !== -1){
      setFirstName(people[index].firstName)
      setLastName(people[index].lastName)
    } 
   }else {
    setLastName('');
    setFirstName(''); 
  } 
  }, [selectedId, people])

  const onDeleteClick = () => {
  dispatch(deletePerson(selectedId))
  dispatch(setSelectedPersonId(''))
  setLastName('');
  setFirstName(''); 
  }



  return (
  <PersonForm onSubmit={(e) => submitPerson(e)}>
    <label htmlFor='firstname'>
    <input
    type="text"
    name="firstname"
    placeholder='first name'
    autoComplete='off'
    value={firstName}
    onChange={(e) => {setFirstName(e.target.value)}}
    required
     />

    </label>
    <label htmlFor='lastname'>
    <input
    type="text"
    name="lastname"
    placeholder='last name'
    value={lastName}
    autoComplete='off'
    onChange={(e) => {setLastName(e.target.value)}}
    required
     />
     </label>

     <ButtonWrap>
     {/* Create */}
     {!selectedId && <button type="submit">Create new</button>} 

     {/* Update */}
     {selectedId && <button type="submit">Update</button>} 

     {/* Delete */}
     {selectedId && 
     <button type="button" onClick={()=>{onDeleteClick()}}>Delete
     </button>} 

     {/* Cancel */}
     {selectedId && <button type="submit" onClick={()=>{dispatch(setSelectedPersonId(''))}}>Cancel</button>}           

     </ButtonWrap> 
  </PersonForm>


  )
}

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
 
  button {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    border:none;
    padding: 4px;
    cursor: pointer;
    pointer-events: all;
    background: #3A2D32;
    color: #ffff;
    font-size: 1rem;
    font-weight: 600;
    &:hover{
    background: #889772;
    transition: ease-in .2s;
    }
  }
 
  button + button {
    margin-left: 10px;
  }
`;

const PersonForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-left: 10px;
 
  label + label {
    margin-top: 6px;
  }
 
  label input {
    width: 100%;
    padding: 12px;
    border-radius: 10px;
    border: 0px;
    background-color: #F5F6F3;
    transition: box-shadow 0.1s ease-in-out;
 
    &:focus {
      outline: 1px solid #3A2D32;
      outline-offset: 1px;
    }
  }
`;