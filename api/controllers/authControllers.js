const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "All fields are required" });
        return;
    }

    const user = await User.findOne({ email });
    const UserId = user._id.toString()

    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                email: user.email,
                id: user.id,
            },
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });

        res.status(200).json({ email: user.email, accessToken , UserId});
    } else {
        res.status(401).json({ error: "Invalid email or password" });
    }
});

const userRegister = asyncHandler(async (req, res) => {
    
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        res.status(400).json({ error: "All fields are required" });
        return;
    }

    const userAvailable = await User.findOne({ email });

    if (userAvailable) {
        res.status(400).json({ error: "User already registered with the given email" });
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        password: hashedPassword,
        email,
    });

    res.status(201).json({ user });
});

module.exports = {
    userLogin,
    userRegister,
};
