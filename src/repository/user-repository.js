const { User } = require('../models/index');
class UserRepository {
     async create(data){
        try {
            const user = await User.create(data);
            return user ;
            
        } catch (error) {
            console.log("Something went wrong on repository layer ");
            throw error ;
            
        }
     }

     async destory(userId){
        try {
            const user = await User.destory({
                where:{
                    id : userId
                }
            })
            return user ;
            
        } catch (error) {
            console.log("Something went wrong on repository layer ");
            throw error ;
            
        }
     }


}

module.exports = UserRepository ;