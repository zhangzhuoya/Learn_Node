let express = require('express');
let route = express.Router();
route.get('/list',(req,res)=>{
    res.send("ok")
})
module.exports = route