const express = require('express')
const { addFavorite, getFavorite, removeFavorite } = require('../controllers/favoritesControllers')
const router = express.Router()

router.post('/:id/favorite' , addFavorite)
router.get('/:id/favorites' , getFavorite)
router.delete('/:id/favorite' , removeFavorite)

module.exports = router