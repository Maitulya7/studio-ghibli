const express = require('express')
const app = express();
const dotevn = require('dotenv').config()
const cors = require('cors');
const multer = require('multer');
const upload = multer();
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 5000;

connectDb()

app.use(cors({
    origin:'http://localhost:3002',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'] 
}))

app.use(express.json())
app.use(upload.none());
app.use('/api/auth' , require("./routes/authRoutes"))
app.use(errorHandler)


app.listen(PORT, console.log(`The server is running on port ${PORT}`))