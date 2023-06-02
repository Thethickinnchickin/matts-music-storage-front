import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songReducer from "./redux/songSlice";
import authReducer from "./redux/authSlice";
import likeReducer from "./redux/likeSlice";
import playlistReducer from "./redux/playlistSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';



const rootReducer = combineReducers({ 
  songplayer: songReducer,
  login: authReducer,
  like: likeReducer,
  playlist: playlistReducer
})

const persistConfig = {
  key: 'root',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})


export const persistor = persistStore(store)