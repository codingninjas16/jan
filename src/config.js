// db -connection
const mongoose = require('mongoose');
require('dotenv').config();

async function connectToMongoDB()
{
    try {
        await mongoose.connect(process.env.mongoDBUrl);
        console.log('database connected');
    
    } catch (error) {
        console.log('error occur in conecting to db',error);
    }
}
connectToMongoDB();


