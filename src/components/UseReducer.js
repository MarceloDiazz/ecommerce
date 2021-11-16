import React from "react";
import Login from "./Login";
import { useState } from "react";
import { postUserLoged } from "../state/user";
import { useDispatch } from "react-redux";
import { message } from "antd";
import { useHistory } from "react-router";
import axios from "axios";

const UseRegister = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePass = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        dispatch(postUserLoged(userData)).then(async (res) => {
            let basket = JSON.parse(localStorage.getItem("basket")) || "";

            if (basket) {
                let arr = []
                basket.map(e => arr.push({_id: e._id._id, cantidad: e.cantidad}))
                await axios.post(`/api/users/${res.payload[0]._id}/basket`, arr);
                localStorage.removeItem("basket");
            }

            history.push("/");
        });
    };

    return <Login onChangeEmail={onChangeEmail} onChangePass={onChangePass} onSubmit={onSubmit} />;
};

export default UseRegister;
