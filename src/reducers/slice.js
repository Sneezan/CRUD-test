/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const personSlice = createSlice({
  name: 'personSlice',
  initialState: {
    people: [
      { id: '1',
        firstName: 'Kalle',
        lastName: 'Karlsson' },
      { id: '2',
        firstName: 'Anna',
        lastName: 'Andersson' }
    ],
    selectedPersonId: '',
    nameFilter: ''
  },
  
  reducers: {
    addPerson: (store, action) => {
      store.people = [...store.people, action.payload]
    },
    updatePerson: (store, action) => {
      const index = store.people.findIndex((p) => p.id === action.payload.id)
      if (index !== -1) {
        store.people[index] = action.payload
      }
    },
    deleteItem: (store, action) => {
      store.people = store.people.filter((p) => p.id !== action.payload.id)
    },
    setSelectPersonId: (store, action) => {
      store.selectedPersonId = action.payload
    },
    setNameFilter: (store, action) => {
      store.nameFilter = action.payload
    }
  }
});
export const {
  addPerson,
  editPerson,
  deletePerson,
  setSelectedPersonId,
  setNameFilter
} = personSlice.actions;
export default personSlice.reducer;