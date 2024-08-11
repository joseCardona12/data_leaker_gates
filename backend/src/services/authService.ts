import { inject, injectable } from "tsyringe";
import AuthRepository from "../repositories/authRepository";
import User from "../models/userModel";
import { encryptPassword, verifyPassword } from "../utils/bycript";
import AuthController from "../controllers/authController";

@injectable()
export default class AuthService{
    constructor(@inject(AuthRepository) private authRepository: AuthRepository){}
    async registerUser(user: Partial<User>): Promise<User | undefined>{
        const userFound = await this.authRepository.getUserByEmail(user.email!);
        if(!userFound){
            const {password} = user;
            user.password! = await encryptPassword(password!)
            return await this.authRepository.registerUser(user);
        }
    }
    async loginUser(user:Partial<User>): Promise<(boolean | number)[]>{
        const userFound = await this.authRepository.getUserByEmail(user.email!);
        const passwordVerify = await verifyPassword(user.password!, userFound!.password);
        return [passwordVerify, userFound!.role_id];
    }
}