const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_SRING)
        console.log("Database is connected successfully" ,' Database name: ', connect.connection.name)
    } catch (error) {
        console.log(error ,"error connecting database")
        process.exit(1)
    }
}

module.exports = connectDb