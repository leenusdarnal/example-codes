import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type DonughtInitialState = {
  numOfDonught: number
}
const initialState: DonughtInitialState = {
  numOfDonught: 30,
}

const donughtSlice = createSlice({
  name: 'donught',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfDonught--
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfDonught += action.payload
    },
  },
})

export default donughtSlice.reducer
export const { ordered, restocked } = donughtSlice.actions
