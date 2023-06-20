const express = require('express');
const bodyParser = require('body-parser');


const { PORT } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');
const UserRepository = require('./repository/user-repository');
const UserService = require('./services/user-services');
const app = express();


const prepareAndServer=()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api' , apiRoutes);

    app.listen(3001,async ()=>{
        console.log('Server started ');
        // const repo = new UserRepository();  
        // const response = await repo.getById(1); 
        // console.log(response);   
        const service = new UserService();
        // const newTiken = service.createToken({email:'krushnachandras420@gmail.com' , id : 1});
        // console.log("new Token is " , newTiken);

        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtydXNobmFjaGFuZHJhczQyMEBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNjg3MjUzNTI3LCJleHAiOjE2ODcyNTcxMjd9.APOpZ_XJUEpUuSaih6MByUK_imYXCbQFqQVK0yRw-Vc"

        //  console.log(service.verifyToken(token));
        
        
         }); 

}

prepareAndServer(); 