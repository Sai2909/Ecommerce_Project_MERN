import express from "express";
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController, } from "../controllers/createProductController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from 'express-formidable';

const router = express.Router();

//ROUTES
//create Products Route
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);


//get Products
router.get('/get-product', getProductController)

//GET single PRODUCT
router.get('/get-product/:slug', getSingleProductController)

//get photo
router.get('/product-photo/:pid', productPhotoController)

//delete product
router.delete('/product:pid', deleteProductController)

//update Product
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController);



export default router;