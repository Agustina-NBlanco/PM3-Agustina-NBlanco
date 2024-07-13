import { Router } from "express";
import { getUsersController, getUserByIdController, registerController, loginController } from "../controllers/usersController";

const userRouter: Router = Router();

userRouter.get("/", getUsersController)
userRouter.get("/:id", getUserByIdController)
userRouter.post("/register", registerController)
userRouter.post("/login", loginController)



export default userRouter;

