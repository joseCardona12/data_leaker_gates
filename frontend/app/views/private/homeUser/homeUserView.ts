import HomeUserController from "../../../controllers/homeUserController";

const HomeUserView = (): {viewPrivate: string, controllerPrivate: typeof HomeUserController.show} =>{
    const viewPrivate: string = 
    `
        <h1>HOme user view</h1>
        <p>dadsad</p>
    
    `;

    const controllerPrivate = HomeUserController.show

    return{
        viewPrivate,
        controllerPrivate
    }
}

export default HomeUserView;