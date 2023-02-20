// import React from 'react'
// import { Provider } from 'react-redux';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { personSlice } from 'reducers/slice';
// import styled from 'styled-components';
// import { Filter } from 'components/Filter';

// // import { InputFields } from 'components/Input';
// // import { TableOfSubmits } from 'components/Table';

// // const reducer = combineReducers({
// //   personSlice: personSlice.reducer
// // })

// // const store = configureStore({ reducer })
import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { Filter } from 'components/Filter';
import { TableOfSubmits } from 'components/Table';
import { InputFields } from 'components/Input';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { personSlice } from './reducers/personSlice';

const reducer = combineReducers({
  personSlice: personSlice.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Frame>
        <Filter />
        <Wrapper>
          <TableOfSubmits />
          <InputFields />
        </Wrapper>
      </Frame>
    </Provider>
  )
}

const Frame = styled.div`
  max-width: 700px;
  min-height: 500px;
  margin: 100px auto;
  padding: 10px;
  border-radius: 6px;
  box-shadow: rgb(149 157 165 / 15%) 0px 3px 6px 0px;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`