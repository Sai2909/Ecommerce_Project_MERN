import categoryModel from "../models/categoryModel.js";
import slugify from 'slugify'

//CREATE CATEGORY CONTROLLER
export const createCategoryController = async (req, res) => {
    try {
        //name is mandatory
        const { name } = req.body
        if (!name) {
            return res.status(401).send({ message: "Name is required" })
        }
        //if category already existed or not
        const existingCategory = await categoryModel.findOne({ name })
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: "category already Exists..!"
            })
        }
        //saving new category
        const category = await new categoryModel({
            name, slug: slugify(name)
        }).save()
        res.status(201).send({
            success: true,
            category,
            message: "New Category created SuccessFully..!"
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Internal Server Error category"
        })

    }

}


//UPDATE CATEGORY CONTROLLER

export const updateCategoryController=async(req,res)=>{
    try {
        const {name}=req.body
        const {id}=req.params
        const category =await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:"Category Update Successfully",
            category,
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Internal server Error in UpdateCategory..!",
            error,
        })
    }
}



//GET ALL CATEGORYS
export const CategoryController=async(req,res)=>{
    try {
        const category=await categoryModel.find({})
        res.status(200).send({
            success:true,
            message:"All categories List",
            category,
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Internal server Error in GetAllCategory..!",
            error,
           
        })
    }
}


//single category controller
export const singleCategoryController=async(req,res)=>{
    try {
        const category=await categoryModel.findOne({slug:req.params.slug});
        res.status(200).send({
            success:true,
            message:"Get single Category successfully..!",
            category,
        })
        
    } catch (error) {
        console.log(error)
      res.status(500).send({
        success:false,
        message:"internal server error in Get single Category",
        error,
      })
    }
}


//Delete category controller 
export const deleteCategoryController=async(req,res)=>{
    try {
        const {id}=req.params
        const category=await categoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:"Category Deleted Successfully..!",
            category,
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Internal server error DeleteCategory",
            error,
        })
    }
}