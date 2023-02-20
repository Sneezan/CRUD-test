/* eslint-disable max-len */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPersonId } from 'reducers/personSlice';
import styled from 'styled-components'
// import person from 'reducers/slice'

export const TableOfSubmits = () => {
  const people = useSelector((store) => store.personSlice.people);
  const filter = useSelector((store) => store.personSlice.nameFilter);
  const selectedId = useSelector((store) => store.personSlice.selectedPersonId)

  const dispatch = useDispatch();

  const onPersonClick = (personId) => {
    dispatch(setSelectedPersonId(personId))
  }

  return (
    <PersonTable role="grid">
      <tbody>
        {people.filter((p) => !filter || p.firstName.includes(filter) || p.lastName.includes(filter)).map((p) => {
          return (
            <tr key={p.id}>
              <td role="gridcell" onClick={() => onPersonClick(p.id)} className={selectedId === p.id ? 'selected-cell' : ''}>{p.firstName}, {p.lastName}</td>
            </tr>
          )
        })}
      </tbody>
    </PersonTable>
  )
}

const PersonTable = styled.table`
  width: 100%;
  height: min-content;
  border-collapse: collapse;
 
  tr,td {
    display: flex;
    align-items: center;
    width: 100%;
  }
 
  tr + tr {
    margin-top: 1px;
  }
 
  td[role="gridcell"] {
    padding: 10px;
    margin: 2px;
    cursor: pointer;
 
    &:hover {
      background-color: #F5F6F3;
      border-radius: 10px;
    }
   
    &.selected-cell {
      background-color: #E2E5DC;
      border-radius: 10px;
    }
  }
`;
