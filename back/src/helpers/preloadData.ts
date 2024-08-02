import { promises } from "dns";
import { AppDataSource, AppointmentModel, CredentialModel, UserModel } from "../config/data-source";
import { AppointmentStatus } from "../enums/AppointmentStatus";


const preLoadUsers = [

    {
        name: "Agustina Blanco",
        email: "agus@gmail.com",
        birthdate: "10/05/2002",
        nDni: 44077795,
        username: "agus10",
        password: "admin"

    },

    {
        name: "Alejandro Cejas",
        email: "ale@gmail.com",
        birthdate: "22/01/2003",
        nDni: 44145678,
        username: "ale22",
        password: "admin"

    },

    {
        name: "Carina Ordoñez",
        email: "cari@gmail.com",
        birthdate: "18/09/1978",
        nDni: 26881716,
        username: "cari18",
        password: "admin"

    }
]

const preLoadAppointments = [

    {
        date: "18/09/2024",
        time: "10:00",
        userId: 1,
        status: AppointmentStatus.ACTIVE
    },

    {
        date: "15/08/2024",
        time: "10:00",
        userId: 2,
        status: AppointmentStatus.ACTIVE
    },

    {
        date: "28/08/2024",
        time: "10:00",
        userId: 3,
        status: AppointmentStatus.ACTIVE
    },

]

export const preloadUserData = async () => {
    await AppDataSource.manager.transaction(async (transactionalEntityManager) => {
        const users = await UserModel.find()


        if (users.length) return console.log("No se hizo la precarga de datos porque ya existen registros de usuarios");

        for await (const user of preLoadUsers) {
            const newCredential = await transactionalEntityManager.save(CredentialModel.create({
                username: user.username,
                password: user.password
            }))

            const newUser = UserModel.create({ ...user, credentials: newCredential })
            await transactionalEntityManager.save(newUser)
        }

        console.log("Se ha realizado correctamente la precarga de datos de usuarios");

    })
}

export const preloadAppointmentsData = async () => {

    const queryRunner = AppDataSource.createQueryRunner()
    await queryRunner.connect()

    try {
        const appointments = await AppointmentModel.find();
        if (appointments.length) return console.log("No se ha creado la precarga de appointments porque ya existen");


        await queryRunner.startTransaction()


        const promises = preLoadAppointments.map(async (appointment) => {

            const newAppointment = await AppointmentModel.create(appointment)
            await queryRunner.manager.save(newAppointment)

            const user = await UserModel.findOneBy({ id: appointment.userId })

            if (!user) throw Error("Usuario no encontrado")

            newAppointment.user = user
            await queryRunner.manager.save(newAppointment)

        })

        await Promise.all(promises)
        await queryRunner.commitTransaction()
        console.log("Se ha realizado correctamente la precarga de datos de appointments");

    } catch (error) {
        console.error(error);
        await queryRunner.rollbackTransaction()
    } finally {
        console.log("Ha finalizado la transacción");
        await queryRunner.release();
    }


}














// try {
//     AppDataSource.manager.transaction(async (transactionalEntityManager) => {
//         const appointments = await AppointmentModel.find()

//         if (appointments.length) return console.log("No se hizo la precarga de datos de appointments porque ya existen los registros ");



//         for await (const appointment of preLoadAppointments) {
//             const newAppointment = await AppointmentModel.create(appointment)
//             await transactionalEntityManager.save(newAppointment)
//             const user = await UserModel.findOneBy({ id: appointment.userId })


//             if (user) {
//                 newAppointment.user = user
//                 transactionalEntityManager.save(newAppointment)
//             }
//             else {
//                 throw Error("Usuario no encontrado")
//             }
//         }

//         console.log("Se ha realizado correctamente la precarga de datos de appointments");

//     })
// } catch (error) {
//     console.log(error)
// }

