import UserController from "../../../controllers/userController";

const LoginView = () =>{
    const viewPublic: string = 
    `
    <h1>Login view</h1>
    
    `;

    const userController = UserController.login

    return {
        viewPublic,
        userController
    }
}

export default LoginView;