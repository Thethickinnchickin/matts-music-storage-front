import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songReducer from "./redux/songSlice";
import authReducer from "./redux/authSlice";
import likeReducer from "./redux/likeSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';


const rootReducer = combineReducers({ 
  songplayer: songReducer,
  login: authReducer,
  like: likeReducer
})

const persistConfig = {
  key: 'root',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})



// const store = configureStore({
//   reducer: {
//     songplayer: songReducer,
//     login: authReducer,
//     like: likeReducer
//   },
// });

export const persistor = persistStore(store)