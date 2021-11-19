import React from "react";
import Register from "../commons/logger/Register";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { postUserRegister, setUser } from "../state/user";
import { useDispatch } from "react-redux";
import { useName, usePassword, useEmail } from "../hook/useInput";
import { success, fail } from "../utils/toast";
import axios from "axios";

const UseReduRegister = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { name, onChangeName, validateName } = useName();
    const { password, onChangePassword, validatePassword } = usePassword();
    const { email, onChangeEmail, validateEmail } = useEmail();
  const [validCaptcha, setValidCaptcha] = useState(false);

    const onSubmitHandle = (e) => {
        e.preventDefault();
        if (!validCaptcha) return fail("please complete captcha")
        const passwordValidate = validatePassword();
        const emailValidate = validateEmail();
        const nameValidate = validateName();

        if (passwordValidate.error) return fail(passwordValidate.message);
        if (emailValidate.error) return fail(emailValidate.message);
        if (nameValidate.error) return fail(nameValidate.message);
        
        const userData = {
            name,
            email,
            password,
        };
        
        dispatch(postUserRegister(userData)).then(() => {
            history.push("/log");
            success("Success Sign up")
        });
    };

    const onSubmitGitHub = () => {
        axios.get('api/auth/github')
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }
    const onSubmitFacebook = () => {
        axios.get('api/auth/facebook')
            .then(res => {
                console.log(res)
            })
    }
    const onSubmitGoogle = () => {
        axios.get('api/auth/google')
            .then(res => {
                console.log(res)
            })
    }
    
    const onSubmitCaptcha = () => {
    setValidCaptcha(true)
  }

    return (
        <Register
            onChangeName={onChangeName}
            onChangeEmail={onChangeEmail}
            onChangePass={onChangePassword}
            onSubmitHandle={onSubmitHandle}
            onSubmitGitHub={onSubmitGitHub}
            onSubmitFacebook={onSubmitFacebook}
            onSubmitGoogle={onSubmitGoogle}
            onSubmitCaptcha={onSubmitCaptcha}
        />
    );

};

export default UseReduRegister;
