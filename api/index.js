const express = require('express')
const app = express();
const dotevn = require('dotenv').config()
const cors = require('cors');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 5000;

connectDb()

app.use(cors({
    origin:'https://ghibliapi.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'] 
}))

app.use(express.json())
app.use('/api/auth' , require("./routes/authRoutes"))
app.use('/api/users' , require('./routes/favoriteRoutes'))
app.use(errorHandler)


app.listen(PORT, console.log(`The server is running on port ${PORT}`))