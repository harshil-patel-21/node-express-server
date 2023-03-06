const express = require("express");
const path = require('path');

const app = express();

const hostname = '127.0.0.1';
const port = 80;

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, hostname, ()=>{
    console.log(`server listern on http://${hostname}:${port}/`);
});