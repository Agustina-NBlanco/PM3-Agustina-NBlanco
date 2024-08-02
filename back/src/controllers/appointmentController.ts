import { Request, Response } from "express";
import { getAppointmentsService, getAppointmentByIdService, createNewAppointmentService, cancelAppointmentService } from "../services/appointmentService";
import { Appointment } from "../entities/Appointment";

export const getAppointmentsController = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment[] = await getAppointmentsService();

        if (appointments.length) {
            res.status(200).json(appointments);
        }else{
            res.status(404).json({ message: "No existen turnos" });
        }

    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
}

export const getAppointmentUniqueController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment = await getAppointmentByIdService(Number(id));


        if (!appointment) {
            res.status(404).json({ message: "Turno no encontrado" });
        }
        else {
            res.status(200).json(appointment);
        }

    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
}

export const createAppointmentController = async (req: Request, res: Response) => {
    try {
        const { date, time, userId } = req.body
        const newAppointment: Appointment | string = await createNewAppointmentService({ date, time, userId })

        if (typeof newAppointment === "string") {
            res.status(400).json({ message: newAppointment });
        }
        else {
            res.status(201).json(newAppointment);
        }


    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
}


export const updateAppointmentController = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const canceledAppointment = await cancelAppointmentService(Number(id));

        if (!canceledAppointment) {
            res.status(404).json({ message: "Turno no encontrado" });

        } else {
            res.status(200).json({ message: "Turno cancelado", canceledAppointment });
        }

    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }

}