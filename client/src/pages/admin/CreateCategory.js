import React from 'react'
import AdminMenu from '../../components/layout/AdminMenu'
import Layout from '../../components/layout/Layout'

const CreateCategory = () => {
  return (
    <Layout title={'Dashboard -create-category'}>
    <div className='row container-fluid m-3 p-3'>
        <div className='col-md-3'><AdminMenu/></div>
        <div className='col-md-9'> CreateCategory</div>
    </div>
    </Layout>
  )
}

export default CreateCategory
