
export const validateAppointments = (input) => {
    const errors = {}

    const START_TIME = "08:30"
    const END_TIME = "20:00"

    if (!input.date) {
        errors.date = "La fecha es requerida"
    } else {
        const [year, month, day] = input.date.split('-').map(Number)
        const appointmentDate = new Date(year, month - 1, day)
        const today = new Date().setHours(0, 0, 0, 0)

        if (day > 31 || month > 12 || year < 1000 || month < 1 || day < 1) {
            errors.date = "Fecha inválida"
        } else if (new Date(year, month - 1, day) < new Date().setHours(0, 0, 0, 0)) {
            errors.date = "La fecha no puede ser anterior a la actual"
        }


    }

    if (!input.time) {
        errors.time = "La hora es requerida"
    } else if (!/^(\d{2}):(\d{2})$/.test(input.time)) {
        errors.time = "Formato de hora no válido"
    } else {
        const [hour, minute] = input.time.split(":").map(Number)
        if (hour > 23 || hour < 0 || minute > 59 || minute < 0) {
            errors.time = "Hora Inválida"
        } else if (input.time < START_TIME || input.time > END_TIME) {
            errors.time = `La hora debe estar entre las ${START_TIME} y las ${END_TIME}`
        }
    }

    return errors
}
