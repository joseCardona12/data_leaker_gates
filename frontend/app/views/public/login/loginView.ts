import UserController from "../../../controllers/userController";

const LoginView = (): {viewPublic:string, controllerPublic: typeof UserController.login} =>{
    const viewPublic: string = 
    `
        <form class="form" id="form-login">
            <div class="form-title">
                <h2 class="login-title">Login</h2>
            </div>
            <fieldset clase="form-email">
                <label class="email-label form-label" for="email-login">Email</label>
                <input class="email-input form-control" id="email-login" name="email-login" type="email">
            </fieldset>
            <fieldset clase="form-password">
                <label class="password-label form-label" for="password-login">Password</label>
                <input class="password-input form-control" id="password-login" name="password-login">
            </fieldset>
            <a href="/register">Register</a>
            <input class="form-button btn btn-primary" type="submit" value="send">
        </form>
    
    `;

    const controllerPublic = UserController.login

    return {
        viewPublic,
        controllerPublic
    }
}

export default LoginView;