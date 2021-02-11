// create server by express js
const express = require('express');

const app = express();

const PORT = process.env.PORT || 2000;

app.listen(PORT,()=>{
    console.log('Server is running on ',PORT);
})