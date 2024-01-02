// @ts-nocheck
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useAuth } from "./session/authcontext";
import Title from "../Layout/Title";
import Header from "../Layout/headerpage";
import Footer from "../Layout/footer";
import { useForm } from 'react-hook-form';
 
export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const { login } = useAuth();
 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async data => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/signin",
        {
          email: data.email,
          password: data.password
        },
        {
          withCredentials: true
        }
      )
      console.log(response);
      if(response.data==true){
        router.push('/dashboard')
      }else{
        setError("Invalid credential")
      }
    } catch (e) {
      console.log(e);
    }
 
  }
 
  console.log(errors);
  return (
    <>
      <Title page="Login" />
      <Header />
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-xs">
          <p className="text-4xl font-bold mb-4">Login</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
              {...register("email", {required: {value:true, message:"email is required"}, pattern: {value: /^\S+@\S+\.\S+$/, message:"Invalid email"}})}
              />
              <p className="text-red-500">{errors?.email?.message}</p>
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full"
              {...register("password", {required: {value:true, message:"password is required"}})}
              />
              <p className="text-red-500">{errors?.password?.message}</p>
            </div>
            <br />
            <a href="./Signup">Create An Account</a>
 
            {error && <p className="text-red-500">{error}</p>}
            <button className="btn btn-primary w-full" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}