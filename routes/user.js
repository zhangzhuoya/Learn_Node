let express = require('express');
let route = express.Router();
let promiseFS = require('../promiseFS');
let {md5Handle,queryJOB, success,queryDeparment, queryUSER} = require('../utils')
// route.get('/list',(req,res)=>{
//     res.send("ok")
// })

route.post('/login',(req,res)=>{
//  1. 获取客户端传递的信息
let { account,password} = req.body;
//  2. 把传递过来的密码进行md5加密
// password = md5Handle(password);
let results = req.$USERDATA.find(item=> (item.name==account||item.phone===account||item.email===account)&&(item.password===password))
// 3. 如果用户存在 进行登录
if (results) {
    let power = queryJOB(req,results.jobId);
    req.session.userId = results.id;
    req.session.power = power.power;
    if (power) {
        success(res,power)
    }
    }else {
        res.status(404);
        res.send('找不到')
    }
})
route.get('/list',(req,res)=>{
    let {departmentId=0,search=""} = req.query;
    if (parseInt(departmentId)) {
        req.$USERDATA = req.$USERDATA.filter(item=>parseInt(item.departmentId) ===parseInt(departmentId))
    }

    if(search) {
        req.$USERDATA = req.$USERDATA.filter(item=>item.name.includes(search)||item.email.includes(search)||item.phone.includes(search))
    }

    req.$USERDATA = req.$USERDATA.map(item=>{
        console.log(item);
        return {
            id: item.id,
            name: item.name,
            sex: item.sex,
            email: item.email,
            phone: item.phone,
            departmentId: item.departmentId,
            department: (queryDeparment(req,item.id)||{}).name||"",
            job: (queryJOB(req,item.jobId||{}).name)||"",
            jobId: item.jobId,
            desc: item.desc
        }
    })

    // 3. 按照api文档要求，筛选出来的信息进行格式化
    // 4. 返回给客户端
    if (req.$USERDATA?.length>0) {
       success(res,{code:0,data: req.$USERDATA})
    }else {
        success(res,{code:1,dataText:'未找到信息'})
    }
})
// =>获取用户详细信息
route.get('/info',(req,res)=>{
    let id = req.session.userId;
    let data = queryUSER(req,id)||{};
    data = {
        id: data.id,
        name:data.name,
        sex: data.sex,
        email: data.email,
        phone: data.phone,
        departmentId: data.departmentId,
        department: queryDeparment(req,data.departmentId).name||"",
        jobId: data.jobId,
        job: (queryJOB(req,data.jobId)|| {}).name || "",
        desc: data.desc
    }
    data?success(res,{data}):success(res,{codeText: '没有用户详细信息',})
})
// => 删除用户信息
route.get('/delete',(req,res)=>{
    let {power} = req.session
   if (!power.includes('userhandle')) {
       res.status(401);
       res.send("没有权限访问这个操作")
       return
   }
   let {userId} = req.query;
//    2. 有权限在进行正常的删除操作
req.$USERDATA = req.$USERDATA.map(item=>{
       if (parseInt(item.id) ===parseInt(userId)) {
           return {
               ...item,
               state:1
           }
       }
       return item
   })
   promiseFS.writeFile('./json/user.json',req.$USERDATA).then(
       success(res)
   ).catch((cat)=>{
       success(res,{codeText:"删除失败"})
   })

})
//=> 增加用户
route.post('/add',(req,res)=>{
    let {id=0,name="",sex=0,email="",phone="",departmentId=0,jobId=0,desc=""} = req.body;
    req.$USERDATA.push({id,name,sex,password:12,email,time: new Date().getTime(),phone,departmentId,jobId,desc,state:0})

promiseFS.writeFile('./json/user.json',req.$USERDATA).then(
    success(res)
).catch((cat)=>{
    success(res,{codeText:"增加失败"})
})
})
// => 获取用户的详细信息
route.get('/login',(req,res)=>{
    if (req.session.id) {
        success(res,{codeText: '登录成功',})
        return
    }
        success(res,{codeText: '失败',})
    })
//=>获取用户详细信息

module.exports = route