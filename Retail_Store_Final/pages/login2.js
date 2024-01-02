// @ts-nocheck
import axios from "axios"
import React from "react";
import { useState } from "react"
 
export default function logi2(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    async function submitform(event){
        const response = await axios.post(
            "http://localhost:3000/admin/signin",
            {
                email:email,
                password:password
            },
            {
                withCredentials: true
            }
        );
        console.log(email)
        console.log(password)
        // console.log(response)
        event.preventDefault();
    }
    return(
        <>
        <form onSubmit={submitform}>
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" name="email"/>
            <br/>
            <label htmlFor="password">password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password"/>
            <br/>
            <input type="submit"/>
        </form>
        </>
    )
}