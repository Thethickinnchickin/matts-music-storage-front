import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
  token: ""
};

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoggin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setToken: (state, action) => {
        state.token = action.payload
    },
    clearLoggin: (state, sction) => {
        state.isLoggedIn = false;
        state.token = "";
    }
  },
});

export const { setLoggin, setToken, clearLoggin } = authSlice.actions;

export default authSlice.reducer;