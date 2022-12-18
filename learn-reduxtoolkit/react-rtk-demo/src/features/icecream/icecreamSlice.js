import { createSlice } from '@reduxjs/toolkit'

import { ordered as CakeOrdered } from '../cake/cakeSlice'

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState: {
    numOfIcecream: 20,
  },
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CakeOrdered, (state) => {
      state.numOfIcecream--
    })
  },
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions
