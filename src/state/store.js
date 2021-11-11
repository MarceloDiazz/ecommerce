import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import reducerUser from "./user"
import Search from "./search"


const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
      user: reducerUser,
      search: Search
  },
});

export default store;
