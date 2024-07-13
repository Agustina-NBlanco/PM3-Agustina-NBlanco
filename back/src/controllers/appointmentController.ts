import { Request, Response } from "express";

export const getAppointmentsController = async (req: Request, res: Response) => {
    res.send("Obtener el listado de todos los turnos de todos los usuarios");
}

export const getAppointmentUniqueController = async (req: Request, res: Response) => {
    res.send("Obtener el detalle de un turno especifico");
}


export const createAppointmentController = async (req: Request, res: Response) => {
    res.send("Crear un turno nuevo");
}


export const updateAppointmentController = async (req: Request, res: Response) => {
    res.send("Cambiar el estado de un turno a cancelled");
}