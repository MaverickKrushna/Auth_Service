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
        console.log("Something went wrong on repository layer ");
        throw error ;
        
    }
 }

 module.exports = {
    create

 }