const DashboardPublic = (viewPublic: string, userController: ()=>void): void =>{
    const root: HTMLElement | null = document.getElementById("root");
    root!.innerHTML = 
    `
        <header></header>
        <main>${viewPublic}</main>
        <footer></footer>
    `;

    userController()
}

export default DashboardPublic;