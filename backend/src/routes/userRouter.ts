import { Router } from "express";
import UserController from "../controllers/userController";

const userRouter: Router = Router();
userRouter.get("/", ()=>console.log("get users"));
userRouter.post("/", UserController.createUser);
export default userRouter;