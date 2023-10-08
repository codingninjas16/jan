const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();


const studentRouter = require('./router/student');
const teacherRoute = require('./router/teacher');
const app = express();

const PORT = 8000;

app.use(bodyParser.urlencoded({extended:true}));// true --> nested object --. content:type:"urlencode"
app.use(bodyParser.json()); // content-type:"application/json"
//router

//middleware
http://localhosT;8000/student/test
// /student /test
// app.use('/student',studentRouter);
// app.use('/teacher',teacherRoute);


app.use('/',require('./router/index'));
app.get('/test',(req,res) =>{
    //delete
    return res.send('hello -get !!');
});

app.get('/test',(req,res) =>{
    return res.send('hello -post!!');
});
//root url

app.use('/',(req,res) =>{
    return res.send('<h1>Error 404 </h1>');
})


module.exports.startServer = async function startServer(){
    try{
        await mongoose.connect(process.env.mongoDBUrl);
        await app.listen(PORT);
        console.log(`db connected and server is up at port ${PORT} on ${process.env.enviroment}`);
        // app.listen(PORT,function listenServer(err){
        //     if(err){
        //         console.log(`error is ${err}`);
        //         return;
        //     }
        //     console.log(`db connected and server is up at port ${PORT} on ${process.env.enviroment}`);
        // })
    }catch(error){
        console.log('error --> ',error);
    }
       
       
};

