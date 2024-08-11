import HomeAdminController from "../../../controllers/homeAdminController";

const HomeAdminView = ():{viewPrivate: string, controllerPrivate: typeof HomeAdminController.show} =>{
    const viewPrivate:string = 
    `
    <h1>HOME ADMIN VIEW</h1>
    `;

    const controllerPrivate = HomeAdminController.show

    return {
        viewPrivate,
        controllerPrivate
    }
}

export default HomeAdminView