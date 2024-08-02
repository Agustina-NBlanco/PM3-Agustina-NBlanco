import { Router } from "express";
import { getAppointmentsController, getAppointmentUniqueController, createAppointmentController, updateAppointmentController } from "../controllers/appointmentController";

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAppointmentsController);
appointmentRouter.get("/:id", getAppointmentUniqueController);
appointmentRouter.post("/schedule", createAppointmentController);
appointmentRouter.put("/cancel/:id", updateAppointmentController);


export default appointmentRouter;

