import UtilController from "../controllers/utilController";

export default class User{
    static async registerUser(name:string,email: string, password: string, role_id:number):Promise<object | undefined>{
        const url: string = "http://localhost:3060/api/auth/register";
        const data: object | undefined = await UtilController.fetchApi(url, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                role_id: role_id
            })
        });
        return data;
    }
    static async loginUser(email:string, password: string): Promise<object | undefined>{
        const url: string = "http://localhost:3060/api/auth/login";
        const data: object | undefined = await UtilController.fetchApi(url,{
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        return data;
    }
}