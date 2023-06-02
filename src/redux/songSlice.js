import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songID: "",
  isPaused: false
};

const songSlice = createSlice({
  name: "songplayer",
  initialState,
  reducers: {
    addSong: (state, action) => {
      state.songID = action.payload;
    },
    clearSong: (state, action) => {
        state.songID = ""
    },
    pause: (state, action) => {
      state.isPaused = true
    },
    resume: (state, action) => {
      state.isPaused = false
    },
  },
});

export const { addSong, clearSong, pause, resume } = songSlice.actions;

export default songSlice.reducer;