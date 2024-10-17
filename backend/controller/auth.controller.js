import User from "../models/user.model";
import { errorHandler } from "../utils/error";
import bcryptjs from "bcryptjs"

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body

    const isValidUser = await User.findOne({email})

    if(isValidUser) {
        return next(errorHandler(400, "User already exist"));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    })

    try {
        await newUser.save()

        res.status(201).json({
            success: true,
            message: "User Created Successfully",
        })
    } catch (error) {
        next(error)
    }
}