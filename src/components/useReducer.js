import React from 'react'
import Login from "./components/Login"
import {useState} from "react"
import {postUserLoged} from "../state/user"
import {useDispatch, useSelector} from "react-redux"

const useReducer = () => {

    const dispatch= useDispatch()
    const user= useSelector((state)=>
        state.user
    )

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
    }

    return (
        < Login 
        onChangeEmail={onChangeEmail} 
        onChangePass={onChangePass} 
        onSubmit={onSubmit}
        />
    )
}

export default useReducer
