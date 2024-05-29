import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[auth,setAuth]=useAuth();

    const navigate=useNavigate()

//Form Function
// console.log(name,email,password,phone,address)
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
           const res= await axios.post('/api/v1/auth/login',{email,password});
           if(res && res.data.success){
               toast.success(res.data && res.data.message);
               setAuth({
                   ...auth,
                   user:res.data.user,
                   token:res.data.token,
               })
               localStorage.setItem('auth',JSON.stringify(res.data))
               navigate('/');
           }else{
            toast.error(res.data.message)
           }
        } catch (error) {
            console.log(error);
            toast.error("Somthing went Wrong")
        }
    }
  return (
    <Layout title="Register-Ecommerce-app">
    <div className='register'>
        <h1>Login Page</h1>
        <form  className='form-container' onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="email" placeholder='Email' className="form-control" required value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
                <input type="password" placeholder='Password' className="form-control" required value={password}  onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">LOGIN</button>
        </form>
    </div>
</Layout>
  )
}

export default Login
