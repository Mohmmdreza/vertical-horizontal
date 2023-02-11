import { configureStore, combineReducers } from "@reduxjs/toolkit"
import componentTypeReducer from "./slices/componentTypeSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({
  componentType: componentTypeReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer
})
