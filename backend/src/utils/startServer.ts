import { Express } from "express";
import sequelize from "../config/db";

const startServer = async(port: number, app: Express): Promise<void> =>{
    try{
        await sequelize.authenticate();
        console.log({message: "Connect with database correctly"});
        await sequelize.sync();
        app.listen(port, ()=>console.log("Server running on the port", port));
        
    }catch(error){
        console.log({message: "Error to use startServer...", error: error});
    }
}

export default startServer;