import { Request, Response, NextFunction } from "express";
import { getAppointmentUniqueController } from "../controllers/appointmentController";






export const getAppointmentUniqueMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if (req.path === "/appointment") {
        return getAppointmentUniqueController(req, res);
    }
    next();
}