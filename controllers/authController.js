
import { comparePassword, hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
import JWT from 'jsonwebtoken'

export const registerController = async (req, res) => {

    try {
        const { name, email, password, phone, address } = req.body
        //VALIDATION
        if (!name) {
            return res.send({ message: 'name is Required' })
        }
        if (!email) {
            return res.send({ message: 'email is Required' })
        }
        if (!password) {
            return res.send({ message: 'password is Required' })
        }

        if (!phone) {
            return res.send({ message: 'phone is Required' })
        }

        if (!address) {
            return res.send({ message: 'address is Required' })
        }

        //CHECK USER
        const existingUser = await userModel.findOne({ email })

        //EXISTING USER
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "already registed please login"
            })
        }

        //REGISTER USER
        const hashedPassword = await hashPassword(password)
        //SAVE
        const user = await new userModel({ name, email, phone, address, password: hashedPassword }).save()
        res.status(201).send({
            success: true,
            message: "User register Successfully..!",
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in Register..!',
            error
        })

    }
}

//POST LOGIN

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        //VALIDATION
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email and Password"
            })
        }
        //CHECK USER
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registerd"
            })
        }
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid password"
            })
        }

        //TOKEN
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success: true,
            message: "Login SuccessFully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role:user.role,
            },
            token,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "error in login",
            error
        })
    }
}


//test controller
export const testController = (req, res) => {
    res.send("protecetd routes")
}
