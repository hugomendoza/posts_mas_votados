import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: [
    "--blue-11",
    "--purple-11",
    "--green-11",
    "--yellow-11"
  ],
  background: [
    "--blue-4",
    "--purple-4",
    "--green-4",
    "--yellow-4"
  ],
  hover: [
    "--blue-5",
    "--purple-5",
    "--green-5",
    "--yellow-5"
  ],
  selectedColor: 0,
  darkMode: false
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setColorScheme: (state, action) => {
      state.selectedColor = action.payload
    },
    setDarkMode: ( state ) => {
      state.darkMode = !state.darkMode
    }
  }
})

export const {
  setColorScheme,
  setDarkMode
} = uiSlice.actions

export default uiSlice.reducer