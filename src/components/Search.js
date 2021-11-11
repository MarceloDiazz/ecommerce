import React from "react";
import InputSearch from "./Home/InputSearch"
import { useDispatch, useSelector } from "react-redux";
import {searchCategory} from "../state/search"

 
const Search = () => {
    const dispatch = useDispatch();

  const selectorCategory = useSelector((state) => state.Category);
  const selectorProvincia = useSelector((state) => state.Provincia);

 
  const onChangeHandler = (e) => {
    dispatch(searchCategory(e.target.value));
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();
    searchCategory(selectorCategory);
  };
  

  return (
    <InputSearch
     
     
    selectorActivity={selectorCategory}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
 

 
  
};

export default Search;