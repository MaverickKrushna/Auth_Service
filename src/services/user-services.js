const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserRepository = require('../repository/user-repository');

const {JWT_KEY} = require('../config/serverConfig');

class UserService{

    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user ;
            
        } catch (error) {
            console.log("Something went wrong on service layer ");
            throw error ;
            
        }
     }


     async signIn(email, plainPassword){
        try {
            const user = await this.userRepository.getByEmail(email);
            const passwordsMatch = this.checkPassword(plainPassword , user.password);

            if(!passwordsMatch){
                console.log("Password dosen't match ");
                throw { error : 'Incorrect password'}
            }

            const newJWT = this.createToken ({email: user.email , id: user.id});

            return newJWT ;

            
        } catch (error) {
            console.log("Something went wrong in the signIn process !  ");
            throw error ;
            
        }

     }


     createToken(user){
        try {
            const result = jwt.sign(user , JWT_KEY , {expiresIn : '1h'}  );
            return result ;
            
        } catch (error) {
            console.log("Something went wrong on  Token creation ");
            throw error ;
            
        }
     }

        verifyToken(token){
            try {
                const response = jwt.verify(token , JWT_KEY);
                return response ;
                
            } catch (error) {
                console.log("Something went wrong on  Token validation  ");
                throw error ;
                
            }

        }

        checkPassword(userInputPlainPassword , encryptedPassword){
            try {
                return bcrypt.compareSync(userInputPlainPassword , encryptedPassword);
                
            } catch (error) {
                console.log("Something went wrong on  password comparison   ");
                throw error ;
                
            }
        }



}

module.exports = UserService ; 