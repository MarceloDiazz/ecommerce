import React from "react";
import Register from "../components/Register";
import { useState } from "react";
import { postUserRegister } from "../state/user";
import { useDispatch } from "react-redux";

const UseReduRegister = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePass = (e) => {
    setPassword(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  
  const onSubmitHandle = (e) => {
      e.preventDefault();
      const userData = {
        name,
        email,
        password,
      };
      console.log(userData);
    dispatch(postUserRegister(userData));
  };
  return (
    <Register
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangePass={onChangePass}
      onSubmitHandle={onSubmitHandle}
    />
  );
};

export default UseReduRegister;
