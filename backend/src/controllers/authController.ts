import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import { Request } from "express";
configDotenv();
export default class AuthController{

    static generateToken(user: {email: string, password:string, role_id: number}):string{
        return jwt.sign(user, process.env.SECRET!, {expiresIn: "1h"});
    }
}