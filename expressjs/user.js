// import fs and express module
const fs = require('fs');
const express = require('express');

const userRouter = express.Router();

// user router

userRouter.get('/',(req,res)=>{
    res.send('<h1>This is User Home</h1>');
})

userRouter.get('/login',(req,res)=>{
    fs.readFile('./src/html/logIn.html',(error,data)=>{
        let stringData = data.toString();
        res.send(stringData);
    })
})

userRouter.get('/singup',(req,res)=>{
    fs.readFile('./src/html/singUp.html',(error,bufferData)=>{
        let data = bufferData.toString();
        res.send(data);
    })
})

userRouter.get('/send',(req,res)=>{
    res.send('>>>> This is get request <<<<');
})

userRouter.post('/send',(req,res)=>{
    res.send('>>>> This is post request <<<<');
})

userRouter.put('/send',(req,res)=>{
    res.send('>>>> This is updating request <<<<');
})

userRouter.delete('/send',(req,res)=>{
    res.send('>>>> This is deleting request <<<<');
})
// user router end

module.exports = userRouter;