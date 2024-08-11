import HomeAdminView from "./views/private/homeAdmin/homeAdminView";
import HomeUserView from "./views/private/homeUser/homeUserView";
import LoginView from "./views/public/login/loginView";
import NotFoundView from "./views/public/notFound/notFoundView";
import RegisterView from "./views/public/register/registerView";

export const routes = {
    public: [
        {path: "/" as string, view: RegisterView},
        {path: "/register" as string, view: RegisterView},
        {path: "/login" as string, view: LoginView},
        {path: "/not-found" as string, view: NotFoundView}
    ],
    private: [
        {path: "/dashboard/home-admin" as string, view: HomeAdminView},
        {path: "/dashboard/home-user" as string,view: HomeUserView}
    ]
}