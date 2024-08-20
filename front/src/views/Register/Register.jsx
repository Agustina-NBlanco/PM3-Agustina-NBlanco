
import styles from "./Register.module.css"
import { useState } from "react"
import { validate } from "../../helpers/validate"
import axios from "axios"

const Register = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
        confirmPassword: ""
    })



    const [errors, setErrors] = useState({})


    
    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUserData({ ...userData, [name]: value })

        setErrors(validate({ ...userData, [name]: value }))

    }

  
    const handleSubmitForm = (event) => {
        event.preventDefault()

        const validationErrors = validate(userData)
        setErrors(validationErrors)

        if (Object.keys(errors).length === 0) {
            axios.post("http://localhost:3000/users/register", userData)
                .then((res) => {
                    if (res.status === 201) {
                        alert('Usuario creado con exito')
                        setUserData({
                            name: "",
                            email: "",
                            birthdate: "",
                            nDni: "",
                            username: "",
                            password: "",
                            confirmPassword: ""
                        })

                        setErrors({})
                    }
                })

                .catch(err => {
                    alert('Error al registrar usuario')
                    console.log(err)
                })

        }

    }

    return (
        <form onSubmit={handleSubmitForm} className={styles.containerRegister}>
            <h1>Registrarse</h1>
            <label htmlFor="">Nombre y Apellido: </label>
            <input type="text" value={userData.name} name="name" onChange={handleInputChange} />
            {userData.name && errors.name && <p>{errors.name}</p>}

            <label htmlFor="">Email: </label>
            <input type="email" value={userData.email} name="email" onChange={handleInputChange} />
            {userData.email && errors.email && <p>{errors.email}</p>}

            <label htmlFor="">Fecha De Nacimiento: </label>
            <input type="date" value={userData.birthdate} name="birthdate" onChange={handleInputChange} />
            {userData.birthdate && errors.birthdate && <p>{errors.birthdate}</p>}

            <label htmlFor="">DNI: </label>
            <input type="number" value={userData.nDni} name="nDni" onChange={handleInputChange} />
            {userData.nDni && errors.nDni && <p>{errors.nDni}</p>}

            <label htmlFor="">Usuario: </label>
            <input type="text" value={userData.username} name="username" onChange={handleInputChange} />
            {userData.username && errors.username && <p>{errors.username}</p>}

            <label htmlFor="">Contraseña: </label>
            <input type="password" value={userData.password} name="password" onChange={handleInputChange} />
            {userData.password && errors.password && <p>{errors.password}</p>}

            <label htmlFor="">Confirmar Contraseña: </label>
            <input type="password" value={userData.confirmPassword} name="confirmPassword" onChange={handleInputChange} />
            {userData.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}

            <input type="submit" value="Registrarse" disabled={Object.keys(errors).length > 0} />

        </form>
    )
}


export default Register;