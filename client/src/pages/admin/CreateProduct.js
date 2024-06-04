import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import AdminMenu from '../../components/layout/AdminMenu'
import Layout from '../../components/layout/Layout'
import { Select } from 'antd'
import { useNavigate } from 'react-router-dom';

const { Option } = Select;


const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [Shipping, setShipping] = useState('');


const navigate= useNavigate();

  //get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('/api/v1/category/get-category')  //direct Destructing the res.data we did like data
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error)
      toast.error('somthing went wrong in getting all categories')
    }
  }

  useEffect(() => {
    getAllCategory();
  }, [])

//create Product
const handleCreate=async(e)=>{
  e.preventDefault();
  // console.log(name,price,description,price)
  try {
    const productData=new FormData();
    productData.append('name',name)
    productData.append('description',description)
    productData.append('price',price)
    productData.append('quantity',quantity)
    productData.append('photo',photo)
    productData.append('category',category)
    
    const {data}=await axios.post('/api/v1/product/create-product',productData)
    if (data?.success) {
      toast.success('Product Created Successfully...!');
      navigate("/dashboard/admin/products");
    } else {
      toast.error(data?.message);
    }
  } catch (error) {
    console.log(error)
    toast.error("Something went wrong")
  }
}


  return (
    <Layout title={'Dashboard-Create-Product'}>
      <div className='row container-fluid m-3 p-3'>
        <div className='col-md-3'>
          <AdminMenu />
        </div>
        <div className='col-md-9'>
          <h1>Create Product</h1>
          <div className='m-1 w-75'>
            <Select border={false}
              placeholder='Selct Category'
              size="large"
              showSearch
              className='form-select mb-3' onChange={(value) => { setCategory(value) }}>
              {categories?.map(c => (
                <Option key={c._id} value={c._id}>{c.name}</Option>
              ))}
            </Select>
            <div className='mb-3'>
              <label className='btn btn-outline-secondary col-12 '>
                {photo ? photo.name : "upload Photo"}
                <input type="file" name="photo" accept='image/*' onChange={(e) => setPhoto(e.target.files[0])} hidden />
              </label>
            </div>
            <div className='mb-3'>
              {photo && (
                <div className='text-center'>
                  <img src={URL.createObjectURL(photo)} alt="Product Photo" height={'200px'} className="img img-responsive" />
                </div>
              )}
            </div>
            <div className='mb-3'>
              <input type="text" value={name} placeholder="Write Product Name...!" className='form-control' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='mb-3'>
              <textarea type="text" value={description} placeholder="Write Description above Product..!" className='form-control' onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='mb-3'>
              <input type="number" value={price} placeholder="Write Product Price...!" className='form-control' onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className='mb-3'>
              <input type="number" value={quantity} placeholder="Write Quantity of Product...!" className='form-control' onChange={(e) => setQuantity(e.target.value)} />
            </div>
            <div className='mb-3'>
                <Select bordered={false} 
                placeholder="selectshipping"
                size='large'
                showSearch
                className='form-control'
                onChange={(value)=>{setShipping(value)}}>
                  <Option value='0'>No</Option>
                  <Option value='1'>Yes</Option>
                </Select>
            </div>
            <div className='mb-3'>
              <button className='btn btn-primary' onClick={handleCreate}>Create Product</button>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateProduct
