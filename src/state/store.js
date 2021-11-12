import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import reducerUser from "./user"

import reducerCart from "./cart";


import Search from "./search"



const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
      user: reducerUser,

      cart: reducerCart,
    

      search: Search

  },
});




export default store;
