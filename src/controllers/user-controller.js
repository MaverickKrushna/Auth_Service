const { response } = require('express');
const UserService = require('../services/user-services');

const userService = new UserService();

const create = async (req , res )=> {
    try {
        const response = await userService.create({
            email : req.body.email , 
            password : req.body.password

        });
        return res.status(201).json({
            success : true , 
            message : 'Successfully create a new user ', 
            data : response , 
            err : {}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false , 
            message : 'Something went wrong ', 
            data :{}, 
            err : error

        });
    }
 }

 const signIn = async (req , res )=>{
    try {
        const response = await userService.signIn(req.body.email , req.body.password);
        return response ;
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false , 
            message : 'Something went wrong ', 
            data :{}, 
            err : error

        });
        
    }
 }

 module.exports = {
    create,
    signIn

 }