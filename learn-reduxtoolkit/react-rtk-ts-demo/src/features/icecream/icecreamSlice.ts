import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ordered as CakeOrdered } from '../cake/cakeSlice'

type IcecreamInitialState = {
  numOfIcecream: number
}

const initialState: IcecreamInitialState = {
  numOfIcecream: 20,
}
const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--
    },
    restocked: (state, action: PayloadAction<number>) => {
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
