import { Router } from "express";
import userRouter from "./userRouter";

const routes: Router = Router();
routes.use("/users", userRouter);
export default routes;