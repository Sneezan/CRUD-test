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
    ]
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
    updateItem: (store, action) => {
      store.items.splice(action.payload)
    },
    deleteItem: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload)
    },
    addItem: (store, action) => {
      store.items.push(action.payload)
    },
    UPDATE_ITEM: (state, action) => {
      state.items[action.fullname].fullname = action.payload
    }
  }
});
export default person;
