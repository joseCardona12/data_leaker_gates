import { Sequelize } from "sequelize-typescript";
import { configDotenv } from "dotenv";
import Role from "../models/roleModel";
import Cart from "../models/cartModel";
import Product from "../models/productModel";
import ProductCart from "../models/productCartModel";
import Order from "../models/orderModel";
import User from "../models/userModel";
import Permission from "../models/permissionModel";
import Entity from "../models/entityModel";
configDotenv();

const sequelize: Sequelize = new Sequelize({
    dialect: "mysql",    
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_DATABASE_NAME!,
    models: [User, Role, Cart, Product, ProductCart, Order, Permission, Entity]
});

export default sequelize;