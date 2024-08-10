import UtilController from "../controllers/utilController";

export default class User{
    private name: string;
    private email: string;
    private password: string;
    private role_id: number;
    constructor(name: string, email: string, password: string, role_id: number){
        this.name = name,
        this.email = email,
        this.password = password,
        this.role_id = role_id
    }
    async registerUser(){
        const url: string = "http://localhost:3060/api/users";
        const data: object | undefined = await UtilController.fetchApi(url, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.name,
                email: this.email,
                password: this.password,
                role_id: this.role_id
            })
        });
        return data;
    }
}