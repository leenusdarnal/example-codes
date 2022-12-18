import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CakeInitialState = {
  numOfCakes: number
}

const initialState: CakeInitialState = {
  numOfCakes: 10,
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload | 1
    },
  },
})
export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
