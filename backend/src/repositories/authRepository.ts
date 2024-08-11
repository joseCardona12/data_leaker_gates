import { injectable } from "tsyringe";
import User from "../models/userModel";

@injectable()
export default class AuthRepository{

    async getUserByEmail(email: string): Promise<User | null>{
        return await User.findOne({
            where: {email}
        })
    }
    async registerUser(user: Partial<User>): Promise<User | undefined>{
        return await User.create(user);
    }
}