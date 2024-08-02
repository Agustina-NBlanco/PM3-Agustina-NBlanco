import { AppointmentModel, UserModel } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
// import IAppointment from "../interfaces/IAppointment";
import AppointmentDto from "../dto/AppointmentDto"
import { AppointmentStatus } from "../enums/AppointmentStatus";

// const arrayOfAppointments: IAppointment[] = [];


export const getAppointmentsService = async (): Promise<Appointment[]> => {
    const appointments = await AppointmentModel.find({ order: { id: "ASC" }, relations: ["user"] });
    return appointments;
}

export const getAppointmentByIdService = async (id: number): Promise<Appointment | null> => {
    const findAppointment = await AppointmentModel.findOne({ where: { id }, relations: ["user"] });
    return findAppointment;
}

export const createNewAppointmentService = async (appointment: AppointmentDto): Promise<Appointment | string> => {
    const user = await UserModel.findOneBy({ id: appointment.userId });

    if (!user) {
        return "Usuario no encontrado";
    }
    const newAppointment = await AppointmentModel.create({ ...appointment, user: user })
    await AppointmentModel.save(newAppointment)
    return newAppointment;
}

export const cancelAppointmentService = async (id: number): Promise<Appointment | null> => {
    const findAppointment = await AppointmentModel.findOneBy({ id });
    if (findAppointment) {
        findAppointment.status = AppointmentStatus.CANCELLED
        await AppointmentModel.save(findAppointment)
        return findAppointment
    }

    return null
}

