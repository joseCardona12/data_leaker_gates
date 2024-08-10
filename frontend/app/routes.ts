import LoginView from "./views/public/login/loginView";
import RegisterView from "./views/public/register/registerView";

export const routes = {
    public: [
        {path: "/" as string, view: RegisterView},
        {path: "/register" as string, view: RegisterView},
        {path: "/login" as string, view: LoginView}
    ]
}