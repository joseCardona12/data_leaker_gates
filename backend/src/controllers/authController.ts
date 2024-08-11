import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import { Request, Response } from "express";
import { container } from "tsyringe";
import AuthService from "../services/authService";
configDotenv();
export default class AuthController{

    static generateToken(user: {email: string, password:string, role_id: number}):string{
        return jwt.sign(user, process.env.SECRET!, {expiresIn: "1h"});
    }

    static async login(req:Request, res: Response): Promise<void>{
        const {email,password} = req.body;
        const authService = container.resolve(AuthService);
        const userLogin = await authService.loginUser({email, password});
        if(!userLogin[0]){ // Verificar lo obtenido / boolean de la funcion verifyPassword
            res.status(401).json({message: "Incorrect data"});
            return;
        }
        const role_id = userLogin[1] as number;
        const tokenGenerate = AuthController.generateToken({email,password, role_id});
        res.status(200).json({token: tokenGenerate, role: role_id});
    }

    static async register(req: Request, res: Response): Promise<void>{
        try{
            const {name,email, password, role_id} = req.body;
            const authService = container.resolve(AuthService);
            const userCreated = await authService.registerUser({name,email,password,role_id}); 
            if(!userCreated){
                res.status(500).json({message: "User exists. Error to create user."});
                return;
            }
            const tokenGenerate: string | null = AuthController.generateToken({email,password,role_id});
            res.status(201).json({tokenGenerate, userCreated});
        }catch(error){
            console.log({message: "Error with the method register on the class AuthController", error: error})
        }
    }
}