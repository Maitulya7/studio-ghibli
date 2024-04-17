const asynHandler = require('express-async-handler')
const User = require("../models/userModel")
const bcrypt = require('bcrypt')

const userLogin = asynHandler(
    async (req, res) => {
        const {email , password} = req.body
        console.log(email , password)
        if(!email || !password){
            res.status(400)
            throw new Error("All fields are required")
        }
        const user = await User.findOne({email})

        if(user && (await bcrypt.compare(password , user.password))){
            res.status(200).json({email})
        }else{
            res.status(401)
            throw new Error("Username of password is invalid")
        }
        res.status(200).json("you are login")
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

        const hashPassword = await bcrypt.hash(password , 10)
        
        if(userAvailable){
            res.status(400);
            throw new Error("User alredy register with givin email")
        }
        const user = await User.create({
            username,
            password:hashPassword,
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