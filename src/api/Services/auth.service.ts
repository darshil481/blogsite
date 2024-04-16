import { RegisterUser } from "../../Interface/user.interface";
const User = require('../../Models/User')
export class AuthService{
    async getUser(userName:string) {
        try{
            const user = await User.findOne({userName:userName});
            return user;
        }catch(error){
            console.log(error)
            throw error;
        }
        
    }
    async registerUser(userDAta:RegisterUser){
        const newUser = new User({
            firstName: userDAta.firstName,
            lastName: userDAta.lastName,
            userName: userDAta.userName,
            email: userDAta.email,
            password: userDAta.password,
            mobile_no: userDAta.mob_no
        });

    }
}