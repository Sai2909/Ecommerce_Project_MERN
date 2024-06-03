import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import CategoryForm from '../../components/forms/CategoryForm';
import AdminMenu from '../../components/layout/AdminMenu'
import Layout from '../../components/layout/Layout'
import { Modal } from 'antd'



const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("")

  //Model
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("")


  //handleFOrm
  //Create Category
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/v1/category/create-category', { name })
      if (data?.success) {
        toast.success(`${name} is created`)
        getAllCategory();
        setName('')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('somthing went wrong in Input Form')
    }
  }

  //get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('/api/v1/category/get-category')  //direct Destructing the res.data we did like data
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error)
      toast.error('somthing went wrong in getting all categories')
    }
  }

  useEffect(() => {
    getAllCategory();
  }, [])

  //Update Functionality
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/v1/category/update-category/${selected._id}`, { name: updatedName });
      if (data.success) {
        toast.success(`${updatedName} is updated`)
        setSelected(null)
        setUpdatedName('')
        setVisible(false)
        getAllCategory();
      } else {
        toast.error(data.message)
      }
      console.log(e)
    } catch (error) {
      toast.error("somthing went wrong")
    }
  }


  //Delete Functionality
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(`/api/v1/category/delete-category/${pId}`)
      if (data.success) {
        toast.success(`category is deleted`)
        getAllCategory();
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error("somthing went wrong")
    }
  }

  return (
    <Layout title={'Dashboard -create-category'}>
      <div className='row container-fluid m-3 p-3'>
        <div className='col-md-3'><AdminMenu /></div>
        <div className='col-md-9'>
          <h1>Manage Category</h1>
          <div className='p-3'>
            <CategoryForm value={name} setValue={setName} handleSubmit={handleSubmit} />
          </div>
          <div>
            <table className="table w-50">
              <thead>
                <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => (
                  <tr key={c._id}>
                    <td>{c.name}</td>
                    <td key={c._id}>
                      <button className='btn btn-primary ms-2' onClick={() => { setVisible(true); setUpdatedName(c.name); setSelected(c) }}>Edit</button>
                      <button className='btn btn-danger ms-2' onClick={() => { handleDelete(c._id); }}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
          <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate} />
        </Modal>
      </div>
    </Layout>
  )
}

export default CreateCategory
