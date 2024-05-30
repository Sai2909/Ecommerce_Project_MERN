import React from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'
import { useAuth } from '../../context/auth'

const AdiminDashboard = () => {
    const[auth]=useAuth()
  return (
    
    <Layout title={"Admin Dashboard-Ecommerce-app"}>
       
        <div className='container-fluid m-3 p-3'>
            <div className='row mt-5'>
                <div className='col-md-3'><AdminMenu/></div>
                <div className='col-md-9 w-75 p-3'>
                    <div className='card m-3 p-3'> 
                        <h2>ADMIN NAME:  {auth?.user?.name}</h2>
                        <h2>ADMIN EMAIL:  {auth?.user?.email}</h2>
                        <h2>ADMIN CONTACT:  {auth?.user?.phone}</h2>
                        <h2>ADMIN ADDRESS:  {auth?.user?.address}</h2>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
   
  )
}

export default AdiminDashboard
