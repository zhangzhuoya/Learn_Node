let express = require('express');
let route = express.Router();
let promiseFS = require('../promiseFS');
let { success,queryDeparment } = require('../utils')
route.get('/list',(req,res)=>{
    req.$DEPARTMENTDATA.map(item=>{
        return {id,name,desc} = item
    })
    console.log(req.$DEPARTMENTDATA);
    req.$DEPARTMENTDATA?.length>0?
        success(res,{data:req.$DEPARTMENTDATA}):
        success(res,{code:1,dataText:"未找到部门信息"})
})
// 获取部门的详细信息
route.get('/info',(req,res)=>{
    let {departmentId} = req.query;
    // let { id } = session;
    console.log(departmentId);
    req.$DEPARTMENTDATA= req.$DEPARTMENTDATA.filter(item=>{
        return parseInt(item["id"])=== parseInt(departmentId);
    })
    console.log(req.$DEPARTMENTDATA);
    req.$DEPARTMENTDATA = req.$DEPARTMENTDATA.map(item=>{
        return {id: item.id,name:item.name,desc:item.desc}
    })
    console.log(req.$DEPARTMENTDATA);

    req.$DEPARTMENTDATA?.length>0?
        success(res,{data:req.$DEPARTMENTDATA}):
        success(res,{code:1,dataText:"未找到部门信息"})
})
// 增加部门信息
route.get('/add',(req,res)=>{
    let {name="",desc=""} = req.body;
    // let { id } = session;
    req.$DEPARTMENTDATA.push({name,desc,time:new Date()})
    promiseFS.writeFile('./json/department.json',req.$DEPARTMENTDATA)

    req.$DEPARTMENTDATA?.length>0?
        success(res,{data:req.$DEPARTMENTDATA}):
        success(res,{code:1,dataText:"未找到部门信息"})
})
module.exports = route