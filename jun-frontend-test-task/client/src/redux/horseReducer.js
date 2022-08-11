import { createSlice } from "@reduxjs/toolkit"

const horseSlice = createSlice({
   name: 'horses',
   initialState: {
      race: [],
      history:[],
   },
   reducers: {
      setRace: (state, action) => {
         state.race = action.payload
      },
      setHistory: (state, action) => {
         state.history.push(action.payload)
      },
   }
})
export const { setRace, setHistory } = horseSlice.actions;
export default horseSlice.reducer