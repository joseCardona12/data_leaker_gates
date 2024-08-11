const DashboardPrivate = (viewPrivate:string, controller: ()=>void):void =>{
    const root: HTMLElement | null = document.getElementById("root");
    root!.innerHTML = 
    `
        <header>Dashboard</header>
        <main>${viewPrivate}</main>
        <footer></footer>
    `;

    controller();
}

export default DashboardPrivate;