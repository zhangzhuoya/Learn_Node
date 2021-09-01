let express = require("express");
let promiseFS = require("./promiseFS")
let bodyParser = require('body-parser');
let { dataHandle } = require('./utils/utils')
let app = express(),
    port = 8081
app.listen(port,()=>{
    console.log('server is open');
})
//把POST请求基于请求主体传递的信息获取到，放到REQ.BODY上
app.use(bodyParser.urlencoded({
	extended: true
}));
// 把所有的json文件中存储的数据获取到，放入req.XXX中
app.use((req,res)=>{
    let path = './json'
    let p1 = promiseFS.readFile(path + '/user.json'),
		p2 = promiseFS.readFile(path + '/customer.json'),
		p3 = promiseFS.readFile(path + '/visit.json'),
		p4 = promiseFS.readFile(path + '/department.json'),
		p5 = promiseFS.readFile(path + '/job.json');
    Promise.all([p1, p2, p3, p4, p5]).then(results => {
        let [$USERDATA, $CUSTOMERDATA, $VISITDATA, $DEPARTMENTDATA, $JOBDATA] = results;
        req.$USERDATA = dataHandle($USERDATA);
        req.$CUSTOMERDATA = dataHandle($CUSTOMERDATA);
        req.$VISITDATA = dataHandle($VISITDATA);
        req.$DEPARTMENTDATA = dataHandle($DEPARTMENTDATA);
        req.$JOBDATA = dataHandle($JOBDATA);
        next();
    }).catch(err => {
        res.status(500);
        res.send(err);
    });
    }

)
//请求的API地址符合/XXX的，都进入到指定的路由中
app.use('/user', require('./routes/user'));
app.use('/department', require('./routes/department'));
app.use('/job', require('./routes/job'));
app.use('/customer', require('./routes/customer'));
app.use('/visit', require('./routes/visit'));

// app.get('user/login',(req,res)=>{

// })
// app.get('user/visit',(req,res)=>{
    
// })
// app.get('user/job',(req,res)=>{
    
// })
// app.get('user/customer',(req,res)=>{
    
// })
// app.get('/list', (req,res)=>{
//     // console.log(req,res);
//     res.status(200);
//     res.type('application/json');
//     let r = JSON.stringify({a:1})
//     res.send(r);

// })
// app.post('/add',(req,res)=>{
//     res.status(200);
//     res.type('application/json');

// })
// 静态资源请求放这里
app.get('/')
app.use(express.static('./client'));
app.use((req,res)=>{
    res.status(404);
    res.send('not found')
})