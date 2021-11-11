import { createAsyncThunk, createReducer, createAction } from "@reduxjs/toolkit";

import axios from "axios";

 export const postUserLoged = createAsyncThunk("userLoged",(user) => {
  console.log("LOGIN",user)
    return axios
    
      .post(`/api/auth/login`, user)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  export const postUserRegister = createAsyncThunk("userRegister",(user) => {
    return axios
    
      .post(`/api/auth/register`, user)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
    return axios
      .get("/api/auth/logout")
      .then((r) => console.log(r));
  });
 
  export const setUser = createAction("SET_USER");

  const reducerUser= createReducer({}, {
    [setUser]: (state, action) => (state = action.payload),
    [postUserLoged.fulfilled]: (state, action) => state = action.payload[0],
    [postUserRegister.fulfilled]: (state, action) =>action.payload,
    [sendLogoutRequest.fulfilled]: (state, action) => state = {},
  }) 

 
export default reducerUser;
