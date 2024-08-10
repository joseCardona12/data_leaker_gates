import { injectable } from "tsyringe";
import User from "../models/userModel";

@injectable()
export default class UserRepository{

    async getUsers(email:string):Promise<User | null | boolean>{
        try{
            return await User.findOne({
                where: {email}
            })
        }catch(error){
            return false;
        }
    } 
    async createUser(user: Partial<User>): Promise<User | undefined | boolean>{
        try{
            return await User.create(user);
        }catch(error){
            return false;
        }
    }
}