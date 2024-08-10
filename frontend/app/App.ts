import Router from "./Router";

const App = ():void =>{
    const root:HTMLElement | null = document.getElementById("root");
    if(!root){
        console.log({message: "Root not found"});
        return;
    }
    Router();
}

export default App;