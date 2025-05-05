import { Router } from "express";
import userRouter from "./usersRoutes";
import appointmentRouter from "./appointmentsRoutes";

const router: Router = Router();

router.get("/", (req, res) => res.send("Hello World!"))
router.use("/users", userRouter)
router.use("/appointments", appointmentRouter)



export default router;

