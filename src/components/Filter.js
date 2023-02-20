import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameFilter } from 'reducers/personSlice'
import styled from 'styled-components'

export const Filter = () => {
  const dispatch = useDispatch();
  // const currentFilter = useSelector((store) => store.personSlice.nameFilter);

  const submitSearch = (e) => {
    e?.preventDefault();
  }

  const onFilterUpdate = (newFilter) => {
    dispatch(setNameFilter(newFilter));
  }

  return (
    <SearchForm onSubmit={(e) => submitSearch(e)}>
      <input
        type="search"
        name="search"
        onChange={(e) => onFilterUpdate(e.target.value)}
        placeholder="search person"
        autoComplete="off" />
    </SearchForm>
  )
}

const SearchForm = styled.form`
  width: 100%;
  margin-bottom: 10px;
  input {
    width: 100%;
    padding: 10px 12px;
    border: 0px;
    background-color: #f7f7f7;
    border-radius: 10px;
    transition: box-shadow 0.1s ease-in-out;
 
    &:focus {
      outline: 1px solid #3A2D32;
      outline-offset: 1px;
    }
  }
`;