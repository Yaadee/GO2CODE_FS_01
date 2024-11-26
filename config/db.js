const mongoose = require('mongoose')
const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {})
        console.log(`Mongo db Connected to : ${conn.connection.host}`.cyan.underline.bold)
        
    } catch (error) {
        console.log("Mongo DB connection Error").cyan.red
        
    }

}
MediaSourceHandle.exports = connectDB