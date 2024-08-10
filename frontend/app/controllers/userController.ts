import User from "../models/userModel";
import { NavigationTo } from "../Router";
import UtilController from "./utilController";

export default class UserController{
    static register():void{
        const $formRegister: HTMLElement | null = document.getElementById("form-register");
        $formRegister!.addEventListener("submit", async(e)=>{
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
            const user = new User($nameUser.value, $emailUser.value, $passwordUser.value, role_id);
            const userCreated = await user.registerUser(); // Registrar un usuario 
            console.log(userCreated);
            
            NavigationTo("/login");
        })
    }
    static login():void{
        console.log("Method login class UserController")
    }
}