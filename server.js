// const express= require("express");  when use common js
// const colors=require("colors")  when use common js
//it will change "type":"module"
import express from "express";
import colors from "colors";
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors';





//configure dotenv
dotenv.config();

//DATABASE CONNECTION
connectDB();

//REST OBJECT
const app = express();

//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//ROUTES
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes)


//REST API
app.get("/", (req, res) => {
    res.send({
        message: "welcome to ecommerse app"
    })
})

//PORT
const PORT = process.env.PORT || 2324;


//RUN LISTEN
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON ${process.env.DEV_MODE} mode on port :${PORT}`.bgGreen.white);
})

