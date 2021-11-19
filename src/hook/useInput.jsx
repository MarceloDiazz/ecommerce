import { useState } from "react";
import {success, fail } from "../utils/toast"

export function useName() {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~*]/;
    const [name, setName] = useState("");

    const onChangeName = (e) => {
        if (e.target.value.length > 10) {
            fail("Name is invalid. Max characters are 10");
        }
        setName(e.target.value);
    };

    const validateName = () => {
        if (name.length < 3 || name.length > 10) {
            return { error: true, message: "Name is invalid. Min characters are 3 and Max characters are 10" }
        }
        if (regex.test(name)) {
            return { error: true, message: "Name is invalid. Can't have symbols " }
        }
        return { error: false }
    };

    return { name, onChangeName, validateName }
}

export function usePassword() {
    const regex = new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");
    const [password, setPassword] = useState("")

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    };

    const validatePassword = () => {
        if (password.length < 8) {
            return { error: true, message: "Password is invalid. Min characters are 8" }
        }
        if (regex.test(password)) {
            return { error: true, message: "Password is invalid. Allow only numbers and characters" }
        }
        return { error: false }
    };

    return { password, onChangePassword, validatePassword }
}

export function useEmail() {
    const regex = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
    const [email, setEmail] = useState("");
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const validateEmail = () => {
        if(!regex.test(email)){
            return { error: true, message: "Email is invalid" }
        }
        return {error: false}
    }

    return { email, onChangeEmail, validateEmail };
}
