import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "-",
    lastName: "-",
    email: "-",
    gender: "-",
    phone: "-",
  },
  isAuthenticated: false,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = initialState.user
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
    }
  },
})

export const { clearUser, setUser, setIsAuthenticated } = userSlice.actions

export default userSlice.reducer



