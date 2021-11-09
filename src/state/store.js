import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import reducerUser from "./user"

const store = configureStore({
  reducer: {
      user: reducerUser
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
