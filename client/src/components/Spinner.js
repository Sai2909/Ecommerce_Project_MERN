import React, { useEffect, useState } from 'react'
import { useNavigate ,useLocation} from 'react-router-dom'
const Spinner = ({path="login"}) => {
    const[count,setCount]=useState(5)
    const navigate=useNavigate();
    const location =useLocation();
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((prevValue)=>--prevValue)
        },1500)
        count==0 && navigate(`/${path}`,{
            state:location.pathname
        })
        return()=>clearInterval(interval)
    },[count,navigate,location,path])
    return (
        <div className="d-flex flex-column justify-content-center align-items-center " 
             style={{
                 color:"white",
                height: '100vh',
                background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(2,15,20,0.8968837535014006) 35%, rgba(0,212,255,1) 100%)',
             }}>
                
                 <h1>Redirecting to You in {count} Seconds</h1><br/> 
                 <span className="loader align-items-center justify-content-center" >Loading</span>
              
            
        </div>
    )
}

export default Spinner
