import { configureStore } from '@reduxjs/toolkit'
// import { createLogger } from 'redux-logger'

import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import donughtReducer from '../features/donught/donughtSlice'
import userReducer from '../features/user/userSlice'

// const logger = createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    donught: donughtReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(logger).concat(),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
