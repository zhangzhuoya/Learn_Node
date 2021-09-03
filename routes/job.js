let express = require('express');
let route = express.Router();
route.get('l',(req,res)=>{
    success(res,{code:1,dataText:"未找到部门信息"})
})
module.exports = route