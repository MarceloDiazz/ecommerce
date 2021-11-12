import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import reducerUser from "./user"
import reducerCart from "./cart";
import { SwapVerticalCircleTwoTone } from "@material-ui/icons";


const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
      user: reducerUser,
      cart: reducerCart
    
  },
});




export default store;
