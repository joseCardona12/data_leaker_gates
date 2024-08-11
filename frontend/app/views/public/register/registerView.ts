import UserController from "../../../controllers/userController";
import "./registerViewStyles.css";

const RegisterView = (): {viewPublic: string, controllerPublic: typeof UserController.register} =>{
    const viewPublic: string = 
    `
        <form class="form" id="form-register">
            <div class="form-title">
                <h2 class="title-register">Register</h2>
            </div>
            <fieldset clase="form-name">
                <label class="name-label form-label" for="name-register">Name</label>
                <input class="name-input form-control" id="name-register" name="name-register">
            </fieldset>
            <fieldset clase="form-email">
                <label class="email-label form-label" for="email-register">Email</label>
                <input class="email-input form-control" id="email-register" name="email-register" type="email">
            </fieldset>
            <fieldset clase="form-password">
                <label class="password-label form-label" for="password-register">Password</label>
                <input class="password-input form-control" id="password-register" name="password-register">
            </fieldset>
            <fieldset clase="form-role">
                <label class="role-label form-label" for="role-register">Role</label>
                <input class="role-input form-control" id="role-register" name="role-register" type="number">
            </fieldset>
            <a href="/login">Login</a>
            <input class="form-button btn btn-primary" type="submit" value="send">
        </form>
    `;

    const controllerPublic = UserController.register

    return {
        viewPublic,
        controllerPublic
    };
}

export default RegisterView;