import React from 'react'
import AdminMenu from '../../components/layout/AdminMenu'
import Layout from '../../components/layout/Layout'

const Users = () => {
  return (
   <Layout title={'Dashboard-All-Users'}>
       <div className='row container-fluid m-3 p-3'>
           <div className='col-md-3'><AdminMenu/></div>
           <div className='col-md-9'>USERS</div>
       </div>
   </Layout>
  )
}

export default Users