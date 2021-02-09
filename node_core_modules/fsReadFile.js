// read file
const fs = require('fs');

fs.readFile('./src/json/randomFile.json',(error,data)=>{
    if(error){
        console.log(error);
    }else{
        // console.log(data); // it provie a buffer data. In ohter word it is a binary format.
        let jsonData = data.toString();
        let objectData = JSON.parse(jsonData);
        console.log(objectData);
    }
})