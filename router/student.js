const express = require('express');
const { route } = require('./student');
const router = express.Router();

//alrwady --> http://localhost:8000/students/1/abc
// studen/1
// student/xyz/
//alreeady --> http://localhost:8000/student/check

// //GET 
// /resource/1?cllg="abcd" --> i want resource whose id is 1
// /resource   --> i want all the resoucre

// //POST
// /resource  --> want to create resource form-data
// data 

// //PUT
// /resouce/1 --> want to update resource with id 1  
// data

// //delete
// /resoucre/1 --> want to delete id 1
// data


//  / ,/:id

// router.route('/')
//     .get()
//     .post();

router.get('/',(req,res) =>{
    console.log('req.query',req.query);
    return res.send(`get-all-students-list-cllg ${req.query.cllg}`);
});


router.post('/',(req,res) =>{
    console.log('body',req.body);
    return res.send('post-request');
})

router.get('/:id',(req,res) =>{
    console.log('params',req.params);
    return res.send('get-student-id');
})

router.put('/:id',(req,res) =>{
    return res.send('put request');
})

router.delete('/:id',(req,res) =>{
    return res.send('delete request');
});




module.exports = router;