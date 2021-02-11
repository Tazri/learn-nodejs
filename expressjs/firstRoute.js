// import express and fs
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
// import user router
const userRouter = require('./user');
const postRouter = require('./postRout');

const app = express();

// apply middleware global way.
// app.use(morgan('dev'));

// // our first costum middleware
let costumMiddleware = (request,response,next)=>{
    console.log('>>> I am middleware <<<');
    // if it not calling, then not stop request to next;
    if(request.url === '/another'){
        console.log('i am calling one');
        response.send('<h1>This page block by admin.</h1>');
        console.log('i am calling two');
    }else{
        next();
    }
}

let tinyLogger = ()=>{
    return (req,res,next)=>{
        console.log(`${req.method} ===> ${req.url}`);
        next();
    }
}

let arrayOfMiddleware = [costumMiddleware,tinyLogger()];

app.use(arrayOfMiddleware);

app.use('/user',userRouter);
app.use('/post',postRouter);

// create router
app.get('/name',(request,response)=>{
    response.json({
        name:'Md Tazri'
    });
})

app.get('/about',(request,response)=>{
    fs.readFile('./src/html/about.html',(error,data)=>{
        let stringData = data.toString();
        response.send(stringData);
    })
})

app.get('/products/:prodId/:reviewId',(req,res)=>{
    console.log(req.params);
    let prodId = req.params.prodId;
    let reviewId = req.params.reviewId;
    res.send(`<h1>prodId : ${prodId}<br>reviewId : ${reviewId}</h1>`);
})

app.get('/',(request,response)=>{
    fs.readFile('./src/html/home.html',(error,data)=>{
        let stringData = data.toString();
        response.send(stringData);
    })
})

app.get('*',(request,response)=>{
    fs.readFile('./src/html/notFound.html',(error,data)=>{
        let stringData = data.toString();
        response.send(stringData);
    })
})


// end router

app.listen(2301,()=>{
    console.log('>>>>>Server is running on 2301 PORT <<<<<');
})