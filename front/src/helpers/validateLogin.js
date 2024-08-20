export const validateLogin = (input) => {
    const errors = {}

    if (!input.username) {
        errors.username = "Usuario requerido"
    }else if (/\s/.test(input.username)) {
        errors.username= "No puede contener espacios en blanco"
    }


    if (!input.password) {
        errors.password = "La contraseña es requerida"
    }

   

    return errors
}

