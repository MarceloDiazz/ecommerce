import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

 export const postUserLoged = createAsyncThunk("userLoged",(user) => {
  
    return axios
    
      .post(`http://localhost:3001/api/login`, user)
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
    
      .post(`http://localhost:3001/api/register`, user)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  });



  const reducerUser= createReducer([], {
    [postUserLoged.fulfilled]: (state, action) => action.payload,
    [postUserRegister.fulfilled]: (state, action) =>action.payload,
  }) 

 
export default reducerUser;
