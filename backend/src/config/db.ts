import { Sequelize } from "sequelize-typescript";
import { configDotenv } from "dotenv";
import UserModel from "../models/userModel";
import Role from "../models/roleModel";
configDotenv();

const sequelize: Sequelize = new Sequelize({
    dialect: "mysql",    
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_DATABASE_NAME!,
    models: [UserModel, Role]
});

export default sequelize;