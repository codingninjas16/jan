const express = require('express');
require('dotenv').config();

const app = express();

const PORT = 8000;

app.listen(PORT,function listenServer(err){
    if(err){
        console.log(`error is ${err}`);
        return;
    }
    console.log(`server is up at port ${PORT} on ${process.env.enviroment}`);
});