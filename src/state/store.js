import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import reducerUser from "./user"


const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
      user: reducerUser
  },
});

export default store;
