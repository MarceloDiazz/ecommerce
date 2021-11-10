import React from 'react'
import Login from "./Login"
import {useState} from "react"
import {postUserLoged} from "../state/user"
import {useDispatch} from "react-redux"
import { message } from "antd";
import { useHistory } from "react-router";

const UseRegister = () => {
    const history= useHistory()

    const dispatch= useDispatch()


    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (e)=>{
        setEmail(e.target.value)
    }

    const onChangePass = (e)=>{
        setPassword(e.target.value)
    }

    const userData={
        email, password
    }

    const onSubmit =(e)=>{
        e.preventDefault()
        dispatch(
            postUserLoged(userData)
        )
        .then(({ payload }) =>
        message
          .success(
            `Logueo exitoso, bienvenido: ${payload.email}. Espere a ser redirigido...`
          ))
          .then(
            setTimeout(() => {
              history.push("/");
            }, 2000)
          )
    }

    return (
        < Login 
        onChangeEmail={onChangeEmail} 
        onChangePass={onChangePass} 
        onSubmit={onSubmit}
        />
    )
}

export default UseRegister
