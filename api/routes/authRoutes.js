const expres = require('express')
const { userLogin, userRegister } = require('../controllers/authControllers')
const router = expres.Router()

router.post('/login' , userLogin)
router.post('/register' ,userRegister) 

module.exports = router