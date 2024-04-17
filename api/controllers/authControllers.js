const asynHandler = require('express-async-handler')
const User = require("../models/userModel")

const userLogin = asynHandler(
    (req, res) => {
        res.status(201).json("you are login")
    })

const userRegister = asynHandler(
    async (req,res) =>{
        const {username , password , email} = req.body
        console.log(username , password , email)
        if(!username || !password || !email){
            res.status(400);
            throw new Error("All filed are requried")
        }
        const userAvailable = await  User.findOne({email})
        
        if(userAvailable){
            res.status(400);
            throw new Error("User alredy register with givin email")
        }
        const user = await User.create({
            username,
            password,
            email
        });
        console.log(`User create ${user}`)
        res.status(201).json({user})
    }
)

module.exports = {
    userLogin,
    userRegister
}