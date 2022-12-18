import { createSlice } from '@reduxjs/toolkit'

const cakeSlice = createSlice({
  name: 'cake',
  initialState: {
    numOfCakes: 10,
  },
  reducers: {
    ordered: (state) => {
      state.numOfCakes--
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload | 1
    },
  },
})
export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
