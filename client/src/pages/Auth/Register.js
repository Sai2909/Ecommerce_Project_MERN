import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import toast from 'react-hot-toast';

const Register = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");

const navigate=useNavigate()

//Form Function
// console.log(name,email,password,phone,address)
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
           const res= await axios.post('/api/v1/auth/register',{name,email,password,phone,address});
           if(res && res.data.success){
               toast.success(res.data && res.data.message);
               navigate('/login');
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
                <h1>Register Page</h1>
                <form  className='form-container' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" placeholder='UserName'  className="form-control" required value={name}  onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input type="email" placeholder='Email' className="form-control" required value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder='Password' className="form-control" required value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Phone' className="form-control" required value={phone}  onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Address' className="form-control" required value={address} onChange={(e)=>setAddress(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">REGISTER</button>
                </form>
            </div>
        </Layout>
    )
}

export default Register
