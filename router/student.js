const express = require('express');
const router = express.Router();
 // /test
 //resource
 // /student/test
 // /student/id
 // /student/delete
router.get('/test',(req,res) => {
    console.log('i am student');
    return res.send('hello-test-1');
});

module.exports = router;