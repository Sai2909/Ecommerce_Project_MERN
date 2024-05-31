import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import CategoryForm from '../../components/forms/CategoryForm';
import AdminMenu from '../../components/layout/AdminMenu'
import Layout from '../../components/layout/Layout'


const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const[name,setName]=useState("")

  //handleFOrm
//Create Category
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const {data}=await axios.post('/api/v1/category/create-category',{name})
      if(data?.success){
        toast.success(`${name} is created`)
        getAllCategory();
        setName('')
      }else{
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
               
                  {categories.map(c => (
                    <>
                    <tr>
                    <td key={c._id}>{c.name}</td>
                      <td><button className='btn btn-primary ms-2'>Edit</button></td>
                      <td><button className='btn btn-danger ms-2'>Delete</button></td>
                    </tr>

                    </>
                  ))}
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateCategory
