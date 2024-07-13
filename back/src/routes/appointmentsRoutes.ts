import { Router } from "express";
import {getAppointmentsController, getAppointmentUniqueController, createAppointmentController, updateAppointmentController} from "../controllers/appointmentController";

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAppointmentsController);
appointmentRouter.get("/appointment", getAppointmentUniqueController);
appointmentRouter.post("/schedule", createAppointmentController);
appointmentRouter.put("/cancel", updateAppointmentController);


export default appointmentRouter;

