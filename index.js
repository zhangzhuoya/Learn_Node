const express = require('express');
const app = express();
app.get('*',(req,res)=>{
    res.send('adbc');
})
const port = 5000;
app.listen(port,()=>{
    console.log(`server is listen on ${port}`);
})