import { container } from "tsyringe";
import UserService from "../services/userService";
import { Request, Response } from "express";
import AuthController from "./authController";

export default class UserController{
    static async createUser(req:Request, res: Response):Promise<void>{
        console.log(req.body);
        const {name,email, password, role_id} = req.body;
        const userService = container.resolve(UserService);
        const userCreated = await userService.createUser({name,email,password,role_id});    
        if(!userCreated){
            res.status(500).json({message: "User exists. Error to create user."});
            return;
        }
        const tokenGenerate: string | null = AuthController.generateToken({email,password,role_id});
        res.status(201).json({tokenGenerate, userCreated});
    }
}