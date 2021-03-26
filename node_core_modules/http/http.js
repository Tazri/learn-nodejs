// http
let http = require('http');
let fs = require('fs');
let serverOne = http.createServer((request,response)=>{
    console.log(request.url);
    console.log(request.read());
    fs.readFile('./src/html/firstServer.html',(error,data)=>{
        if(error){
            console.log(error);
        }else{
            let stringData = data.toString();
            response.end(stringData);
        }
    })
})

serverOne.listen(2030,()=>{
    console.log('Server is running successfully in 2030 port.')
})