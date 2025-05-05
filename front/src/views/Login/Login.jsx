
import { useState } from "react";
import { validateLogin } from "../../helpers/validateLogin";
import styles from "./Login.module.css"
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser, setUserAppointments } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../api";


const Login = () => {

    const [userState, setUserState] = useState({
        username: "",
        password: ""

    })


    const [errors, setErrors] = useState({})

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUserState({ ...userState, [name]: value })
        setErrors(validateLogin({ ...userState, [name]: value }))

    }


    const handleSubmitForm = (event) => {
        event.preventDefault()
        const validationErrors = validateLogin(userState)
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            axios.post(`${baseUrl}/users/login`, userState)
                .then(res => {
                    if (res.status === 200) {
                        alert('Sesión iniciada con exito')
                        dispatch(setUser(res.data.user))
                        dispatch(setUserAppointments(res.data.userAppointments))

                        setUserState({
                            username: "",
                            password: ""
                        })

                        setErrors({})
                        navigate("/")
                    }
                })
                .catch(err => {
                    alert('Error al iniciar sesión')
                    console.log(err)
                })
        }
    }

    const handleRegister = () => {

        navigate("/register")
    }

    return (
        <form onSubmit={handleSubmitForm} className={styles.containerLogin}>
            <h1>Login</h1>

            <label>Usuario: </label>
            <input type="text" name="username" value={userState.username} onChange={handleInputChange} />
            {userState.username && errors.username && <p>{errors.username}</p>}


            <label>Contraseña: </label>
            <input type="password" name="password" value={userState.password} onChange={handleInputChange} />
            {userState.password && errors.password && <p>{errors.password}</p>}

            <input type="submit" value="Iniciar Sesión" disabled={Object.keys(errors).length > 0} />
            <input type="button" onClick={handleRegister} value="Registrarse" />
        </form>
    )

}

export default Login;