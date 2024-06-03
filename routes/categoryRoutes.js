import express from "express";
import { CategoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/createCategoryController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router=express.Router();

//routes
//create Category
router.post('/create-category',requireSignIn,isAdmin,createCategoryController)

//Update Category
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController)


//GET ALL CATEGORY
router.get('/get-category',CategoryController)

//SINGLE CATEGORY
router.get('/single-category/:slug',singleCategoryController)

//DELETE CATEGORY
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)


export default router;