import RegisterView from "./views/public/register/registerView";

export const routes = {
    public: [
        {path: "/register" as string, view: RegisterView}
    ]
}