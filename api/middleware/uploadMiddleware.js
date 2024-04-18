const multer = require('multer')
const path = require('path')


const storage =  multer.diskStorage({
    destination : (req ,file , cb)=> {
        cb(null , 'images')
    },
    filename: (req ,file , cb)=> {
        cb(null , Data.now() + path.extname(file.originalname))
    }
})

const uplodaMiddleware = multer