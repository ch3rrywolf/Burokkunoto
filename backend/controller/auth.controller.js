import User from "../models/user.model";

export const signup = async (req, res) => {
    const {username, email, password} = req.body

    const isValidUser = await User.findOne({email})

    if(isValidUser) {
        console.log("User already exist");
    }
}