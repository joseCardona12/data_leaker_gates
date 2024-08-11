const NotFoundView = (): {viewPublic:string, controllerPublic: ()=>void} =>{
    const viewPublic:string = 
    `
        <h1>Error 404</h1>
        <h3>View not found</h3>
        <p>The page you are looking for has not been found. 
        This might be because URL is incorrect or that you don't have permission to view this page...</p>
    `;

    const controllerPublic = (): void =>{
        console.log("not found");
    }

    return {
        viewPublic,
        controllerPublic
    }
}

export default NotFoundView;