const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const addFavorite = asyncHandler(async (req, res) => {
    const { movieId , email} = req.body;
    console.log("MovieId:", movieId)
    console.log("User email", email)
    const user = await User.findOne({email});
    if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
    }

    if (!user.favorites.includes(movieId)) {
        user.favorites.push(movieId);
        await user.save();
        res.status(200).json({ message: "Movie added to favorites" });
    } else {
        res.status(400).json({ error: "Movie is already a favorite" });
    }
});

const removeFavorite = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const { movieId } = req.body; 
   

    const user = await User.findById(userId);
    if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
    }

    user.favorites = user.favorites.filter(id => id.toString() !== movieId);
    await user.save();
    res.status(200).json({ message: "Movie removed from favorites" });
});

const getFavorite = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const user = await User.findOne({userId});
    if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
    }

    res.status(200).json({ favorites: user.favorites });
});

module.exports = {
    addFavorite,
    removeFavorite,
    getFavorite,
};
