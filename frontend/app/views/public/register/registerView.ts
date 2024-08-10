import UserController from "../../../controllers/userController";

const RegisterView = (): {viewPublic: string, userController: typeof UserController.register} =>{
    const viewPublic: string = 
    `
    <h1>Register view</h1>
    `;

    const userController = UserController.register

    return {
        viewPublic,
        userController
    };
}

export default RegisterView;