import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songID: "",
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
    }
  },
});

export const { addSong, clearSong } = songSlice.actions;

export default songSlice.reducer;