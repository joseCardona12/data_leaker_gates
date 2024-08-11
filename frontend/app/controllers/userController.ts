import User from "../models/userModel";
import { NavigationTo } from "../Router";
import UtilController from "./utilController";

export default class UserController{
    static register():void{
        const $formRegister: HTMLElement | null = document.getElementById("form-register");
        $formRegister!.addEventListener("submit",async(e)=>{
            e.preventDefault();
            const $nameUser: HTMLInputElement | null = document.getElementById("name-register") as HTMLInputElement;
            const $emailUser: HTMLInputElement | null = document.getElementById("email-register") as HTMLInputElement;
            const $passwordUser: HTMLInputElement | null = document.getElementById("password-register") as HTMLInputElement;
            const $roleUser: HTMLInputElement | null = document.getElementById("role-register") as HTMLInputElement;

            const fieldVerify: boolean = UtilController.verifyFields($nameUser!.value, $emailUser!.value, $passwordUser!.value);
            if(!fieldVerify){
                console.log({message: "Please, fill all fields"});
                return;
            }
            const role_id:number = parseInt($roleUser!.value) || 2;
            const userCreated = await User.registerUser($nameUser.value, $emailUser.value, $passwordUser.value, role_id); // Registrar un usuario 
            console.log(userCreated);
            NavigationTo("/login");
        })
    }
    static login():void{
        const $formLogin: HTMLElement | null = document.getElementById("form-login");
        $formLogin!.addEventListener("submit", async(e)=>{
            e.preventDefault();
            const $emailUser: HTMLInputElement | null = document.getElementById("email-login") as HTMLInputElement;
            const $passwordUser: HTMLInputElement | null = document.getElementById("password-login") as HTMLInputElement;

            const fieldsVerify: boolean = UtilController.verifyFields($emailUser.value, $passwordUser.value);
            if(!fieldsVerify){
                console.log({message: "Please, fill all fields..."});
                return;
            }
            const data: object | undefined = await User.loginUser($emailUser.value, $passwordUser.value);
            if(!data){
                console.log({message: "Error to get data"});
                return;
            }
            const {token,role} = data as {token: string, role:number};
            UserController.saveLocalstorage(token,role);
            UserController.verifyRoleNavigateTo(role);
        })
    }

    static saveLocalstorage(token:string, role:number):void{
        localStorage.setItem("token", token);
        localStorage.setItem("role", role.toString());
    }

    static verifyRoleNavigateTo(role:number):void{
        if(role === 1){
            NavigationTo("/dashboard/home-admin");
            return;
        }
        if(role === 2){
            NavigationTo("/dashboard/home-user");
            return;
        }
    }
}