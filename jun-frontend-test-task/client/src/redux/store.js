import { configureStore } from '@reduxjs/toolkit'
import horseReducer from './horseReducer'


export const store = configureStore({
  reducer: {
   horse:horseReducer,
  },
})