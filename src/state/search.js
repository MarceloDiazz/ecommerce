import { createReducer, createAsyncThunk, } from "@reduxjs/toolkit";
import axios from "axios";
 

export const searchCategory= createAsyncThunk("Search_Activity",(category)=>{

    return axios.get(`/api/products/category/${category}`).then((res)=>(res.data))

})
export const searchProvincia= createAsyncThunk("Search_Provincia",(Provincia)=>{

  
    return axios.get(`/api/products/province/${Provincia}`).then((res)=>(res.data))

})




const Search = createReducer([],{
  [searchCategory.fulfilled]:(state, action) =>  action.payload,
  [ searchProvincia.fulfilled]:(state, action) =>  action.payload
})
export default Search