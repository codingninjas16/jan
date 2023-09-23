const express = require('express');
const router = express.Router();
 // /test
router.get('/testMe',(req,res) => {
    return res.send('hello-test-teacher');
});

module.exports = router;