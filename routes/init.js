const express = require('express');
const app = express();
app.get('*',(req,res)=>{
    res.send('handler ing');
})
const port = 5000;
app.listen(port,()=>{
    console.log(`server is listen on ${port}`);
})