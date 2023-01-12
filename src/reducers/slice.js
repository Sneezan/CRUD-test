/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const person = createSlice({
  name: 'person',
  initialState: {
    items: [
      { id: '1',
        fullname: [' Kalle, Karlsson'],
        toggled: false },
      { id: '2',
        fullname: [' Anna, Andersson'],
        toggled: false }
    ],
    selectedPerson: {
      id: '',
      fullname: [''],
      toggled: false 
    }
  },
  
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.toggled = !item.toggled
        }
      })
    },
    deleteItem: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload)
    },
    addItem: (store, action) => {
      store.items.push(action.payload)
    },
    filterItem: (store, action) => {
      const updatedFilters = store.filters.map(filter => {
        if (filter.id === action.payload) {
          return {
            ...filter,
            status: !filter.status
          }
        } else {
          return filter
        }
      })
      store.filters = updatedFilters
    },
    editItem: (store, action) => {
      store.items.push(action.payload)
    },
    updatePerson: (store, action) => {
      store.selectedPerson = action.payload
    }

  }
});
export default person;

