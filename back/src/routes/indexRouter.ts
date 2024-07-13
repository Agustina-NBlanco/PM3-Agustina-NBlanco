import { Router } from "express";
import userRouter from "./usersRoutes";
import appointmentRouter from "./appointmentsRoutes";
import { getAppointmentUniqueMiddleware } from "../middlewares/appointmentMiddleware";

const router: Router = Router();


router.use(getAppointmentUniqueMiddleware)
router.use("/users", userRouter)
router.use("/appointments", appointmentRouter)





export default router;

