import { createSlice } from '@reduxjs/toolkit'

const donughtSlice = createSlice({
  name: 'donught',
  initialState: {
    numOfDonughts: 30,
  },
  reducers: {
    ordered: (state) => {
      state.numOfDonughts--
    },
    restocked: (state, action) => {
      state.numOfDonughts += action.payload
    },
  },
})

export default donughtSlice.reducer
export const { ordered, restocked } = donughtSlice.actions
