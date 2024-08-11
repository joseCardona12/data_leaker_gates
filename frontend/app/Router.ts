import DashboardPrivate from "./components/layout/private/dashboard/dashboardPrivate";
import DashboardPublic from "./components/layout/public/dashboard/dashboardPublic";
import { routes } from "./routes";

const Router = ():void =>{
    const path: string = window.location.pathname;
    const getToken:string | null = localStorage.getItem("token"); 
    const publicRoute = routes.public.find(route=>route.path === path);
    const privateRoute = routes.private.find(route=>route.path === path);

    if(path === "/" || path === "/login" || path === "/register" && getToken){
        if(localStorage.getItem("role") === "1"){
            NavigationTo("/dashboard/home-admin");
            return;
        }
        if(localStorage.getItem("role") === "2"){
            NavigationTo("/dashboard/home-user");
            return;
        }
    }
    if(path === "/dashboard/home-admin" && localStorage.getItem("role") === "2"){
        NavigationTo("/dashboard/home-user");
        console.log({message: "Not authorized"});
        return;
    }
    if(path === "/dashboard/home-user" && localStorage.getItem("role") === "1"){
        NavigationTo("/dashboard/home-admin");
        console.log({message: "Not authorized"});
        return;
    }
    if(publicRoute){
        const {viewPublic, controllerPublic} = publicRoute.view();
        DashboardPublic(viewPublic, controllerPublic); 
        return;
    }
    if(privateRoute){
        if(!getToken){
            console.log({message: "Not authorized"});
            NavigationTo("/login");
            return   
        }
        const {viewPrivate, controllerPrivate} = privateRoute.view();
        DashboardPrivate(viewPrivate, controllerPrivate);
        return;
    }

    NavigationTo("/not-found");
}

export function NavigationTo(path:string){
    window.history.pushState({}, "", window.location.origin + path);
    Router();
}
export default Router;