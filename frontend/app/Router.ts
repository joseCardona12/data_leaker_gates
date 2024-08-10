import PublicDashboard from "./components/layout/public/dashboard/dashboardPublic";
import { routes } from "./routes";

const Router = ():void =>{
    const path: string = window.location.pathname;
    const publicRoute = routes.public.find(route=>route.path === path);

    if(publicRoute){
        const {viewPublic, userController} = publicRoute.view();
        PublicDashboard(viewPublic, userController); 
    }
}
export default Router;