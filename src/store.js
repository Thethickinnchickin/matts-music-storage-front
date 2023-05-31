import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./redux/songSlice";

const store = configureStore({
  reducer: {
    songplayer: songReducer,
  },
});

export default store;