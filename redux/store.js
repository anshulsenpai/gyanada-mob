import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { persistStore, persistReducer } from "redux-persist";
import FilesystemStorage from "redux-persist-filesystem-storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage: FilesystemStorage,
};

const reducers = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export let persistor = persistStore(store);
