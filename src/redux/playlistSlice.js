import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlistID: "",
  playlistSongs: [],
  isLive: false,
  currentIndex: 0
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPLId: (state, action) => {
      state.playlistID = action.payload;
    },
    setSongs: (state, action) => {
        state.playlistSongs = action.payload
    },
    setLive: (state, action) => {
      state.isLive = true
    },
    setDead: (state, action) => {
      state.isLive = false
    },
    setCurrentIndex: (state, action) => {
        state.currentIndex = action.payload
    },
    resetCurrentIndex: (state, action) => {
        state.currentIndex = 0;
    }
  },
});

export const { setPLId, setSongs, setLive, setDead, setCurrentIndex, resetCurrentIndex } = playlistSlice.actions;

export default playlistSlice.reducer;