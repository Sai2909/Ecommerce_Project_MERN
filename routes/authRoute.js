import express from "express";
import {registerController,loginController,testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//ROUTER OBJECT
const router= express.Router();


//ROUTING
//REGISTER || METHOD POST
router.post('/register',registerController)


//LOGIN || POST
router.post('/login',loginController)

//TEST ROUTE
router.get('/test',requireSignIn,isAdmin,testController)

//PROTECTED USER ROUTE AUTH
router.get('/user-auth',requireSignIn,(req,res)=>{
res.status(200).send({ok:true})
})


//PROTECTED ADMIN ROUTE AUTH
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
    })


export default router;
