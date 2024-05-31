import productModel from "../models/productModel.js";
import fs from 'fs'
import slugify from 'slugify'

export const createProductController = async (req, res) => {
    try {
        //req.filds beacause we installed package express-formidable so once check in documentation
        const { name, slug, description, price, category, quantity, Shipping } = req.fields
        const { photo } = req.files
        //validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "name is required" })
            case !description:
                return res.status(500).send({ error: "description is required" })
            case !price:
                return res.status(500).send({ error: "price is required" })
            case !category:
                return res.status(500).send({ error: "category is required" })
            case !quantity:
                return res.status(500).send({ error: "quantity is required" })
            case photo && photo.size > 1000000:
                return res.status(500).send({ error: "Photo is Required and photo should be less than 1mb" })

        }
        const products = new productModel({ ...req.fields, slug: slugify(name) })
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save()
        res.status(201).send({
            success: true,
            message: "Product Created SuccessFully...!",
            products,

        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server Error in Product Creation..!",
            error,
        })
    }
}


//Get ALL Products 
export const getProductController = async (req, res) => {
    try {
        const products = await productModel.find({}).populate('category').select('-photo').limit(12).sort({ createdAt: -1 })
        res.status(200).send({
            success: true,
            counTotal: products.length,
            message: "All products",
            products
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error in Get Products",
            error
        })
    }
}

//GET ONE PRODUCT 

export const getSingleProductController = async (req, res) => {
    try {
        const product = await (await productModel.findOne({ slug: req.params.slug }).select('-photo')).populate('category')
        res.status(200).send({
            success: true,
            message: "Single Product Fetched",
            product
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error for get Single Product",
            error
        })
    }
}

//get PHOTO
export const productPhotoController = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.pid).select("photo")
        if (product.photo.data) {
            res.set('Content-type', product.photo.contentType)
            return res.status(200).send(product.photo.data)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error while getting Photo",
            error
        })
    }
}

//delete product
export const deleteProductController = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.pid).select('-photo')
        res.status(200).send({
            success: true,
            message: "Product Deleted SuccessFully...!"
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: true,
            message: "error while deleting product",
            error
        })

    }
}


//udpate PRODUCT

export const updateProductController = async (req, res) => {
    try {
        //req.filds beacause we installed package express-formidable so once check in documentation
        const { name, slug, description, price, category, quantity, Shipping } = req.fields
        const { photo } = req.files
        //validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "name is required" })
            case !description:
                return res.status(500).send({ error: "description is required" })
            case !price:
                return res.status(500).send({ error: "price is required" })
            case !category:
                return res.status(500).send({ error: "category is required" })
            case !quantity:
                return res.status(500).send({ error: "quantity is required" })
            case photo && photo.size > 1000000:
                return res.status(500).send({ error: "Photo is Required and photo should be less than 1mb" })

        }
        const products = await productModel.findByIdAndUpdate(req.params.pid,
            { ...req.fields, slug: slugify(name) }, { new: true }
        )
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save()
        res.status(201).send({
            success: true,
            message: "Product updated SuccessFully...!",
            products,

        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server Error in while  Product Updating..!",
            error,
        })
    }
}