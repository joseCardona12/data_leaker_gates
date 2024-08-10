import { inject, injectable } from "tsyringe";
import User from "../models/userModel";
import UserRepository from "../repositories/userRepository";
import { encryptPassword } from "../utils/bycript";

@injectable()
export default class UserService{
    constructor(@inject(UserRepository) private userRepository: UserRepository){}
    async createUser(user: Partial<User>): Promise<User | undefined | boolean>{
        const userFound = await this.userRepository.getUsers(user.email!);
        if(!userFound){
            const {password} = user;
            user.password! = await encryptPassword(password!)
            return await this.userRepository.createUser(user);
        }
    }
}