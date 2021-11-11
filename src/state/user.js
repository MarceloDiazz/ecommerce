import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

import axios from "axios";

 export const postUserLoged = createAsyncThunk("userLoged",(user) => {
  console.log("LOGIN",user)
    return axios
    
      .post(`/api/auth/login`, user)
      .then((res) => {
        res.data.login = true;
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
      .post("/api/auth/logout")
      .then((r) => r.data);
  });
 
  const reducerUser= createReducer([], {
    [postUserLoged.fulfilled]: (state, action) => action.payload,
    [postUserRegister.fulfilled]: (state, action) =>action.payload,
    [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
  }) 

 
export default reducerUser;
