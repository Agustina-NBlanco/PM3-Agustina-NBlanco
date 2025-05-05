
import styles from "./UnicoTurno.module.css"
import { useDispatch } from "react-redux"
import axios from "axios"
import { cancelApointment } from "../../redux/reducer"
import baseUrl from "../../api"


const UnicoTurno = ({ appointment: { id, date, time, status } }) => {

    const dispatch = useDispatch()


    const handleCancelAppointment = () => {

        const appointmentDateTime = new Date(`${date} ${time}`)
        const now = new Date()
        const timeDifferenceInHours = (appointmentDateTime - now) / (1000 * 60 * 60)

        if (timeDifferenceInHours >= 24) {

            axios.put(`${baseUrl}/appointments/cancel/${id}`)
                .then(res => {
                    dispatch(cancelApointment(id))
                    console.log(res);

                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            alert("No se puede cancelar el turno dentro de las 24hs faltantes para el turno")
        }


    }

    return (
        <div className={styles.containerAppointment}>
            <p> Fecha:{date}</p>
            <p> Hora: {time}</p>
            <p> Estado: {status}</p>
            <button className={`${styles.cancelButton} ${status === "cancelled" ? styles.cancelled : ""}`} onClick={handleCancelAppointment} disabled={status === "cancelled"}>Cancelar Turno</button>
            {status === "cancelled" && <p>Turno Cancelado</p>}

        </div>
    )
}

export default UnicoTurno;