const express = require('express');
const app = express();
const prepareAndServer=()=>{

    app.listen(3001,()=>{
        console.log('Server started ');
    })
}

prepareAndServer(); 