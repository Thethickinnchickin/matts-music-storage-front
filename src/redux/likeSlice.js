import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchLikedSongs = createAsyncThunk(
  'like/fetchLikedSongs',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:4000/api/user/likedSongs', {
        headers: {
          'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDZlYWVlYjMzY2IzMTc5ZWQwOTFkOGQiLCJ1c2VybmFtZSI6InVzZXJuYW1lIiwicGFzc3dvcmRfaGFzaCI6IiQyYSQxMCQ0Q1V1YUZmMi9vb1VxTVJCbEt1QVYuWXpDb1F0N3J5ay92b0ZRejFMWG5kQmxVMnouaVpNcSIsImVtYWlsIjoiZW1haWwiLCJhZ2UiOjMwLCJsaWtlZFNvbmdzIjpbXSwiX192IjowLCJpYXQiOjE2ODU1ODYyMDUsImV4cCI6MTY4NjE5MTAwNX0.QNKRIGe7vSYt-yccRtOcOxtONeq3ajlQQJtRitzxdkY"
        }
      });
      if (response.status === 200) {
        const jsonData = response.data;
        return jsonData.songs;
      } else {
        console.error('Error retrieving songs:', response.status);
        return rejectWithValue([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return rejectWithValue([]);
    }
  }
);

const initialState = {
  likedSongs: [],
  loading: false,
  error: null
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addLikedSong: (state, action) => {
      state.likedSongs.push(action.payload);
    },
    removeSong: (state, action) => {
      const index = state.likedSongs.indexOf(action.payload);
      if (index > -1) {
        state.likedSongs.splice(index, 1);
      }
    },
    setSongs: (state, action) => {
      state.likedSongs = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLikedSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLikedSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.likedSongs = action.payload;
      })
      .addCase(fetchLikedSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { addLikedSong, removeSong, setSongs } = likeSlice.actions;

export default likeSlice.reducer;
