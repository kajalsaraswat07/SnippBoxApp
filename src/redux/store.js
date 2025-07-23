import {configureStore} from "@reduxjs/toolkit"
import snipReducer from "./snipSlice"

export const store = configureStore({
  reducer:{
      snip: snipReducer
  }
})