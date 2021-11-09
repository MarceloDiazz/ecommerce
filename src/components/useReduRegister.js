import React from 'react'
import Register from "./components/Register"
import {useState} from "react"
import {postUserLoged} from "../state/user"
import {useDispatch, useSelector} from "react-redux"

const useReduRegister = () => {

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
        < Register 
        onChangeEmail={onChangeEmail} 
        onChangePass={onChangePass} 
        onSubmit={onSubmit}
        />
    )
}

export default useReduRegister
