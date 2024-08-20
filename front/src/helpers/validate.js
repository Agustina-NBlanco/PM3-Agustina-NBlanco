
export const validate = (input) => {
    const errors = {}

    if (!input.name) {
        errors.name = "Nombre y Apellido son obligatorios";
    }
    else if (input.name.length < 3) {
        errors.name = "El nombre y apellido debe tener al menos 3 caracteres";
    }
    else if (/\d/.test(input.name)) {
        errors.name = "El nombre y apellido no puede contener números";
    }
    else if (/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/.test(input.name)) {
        errors.name = "El nombre y apellido no puede contener caracteres especiales ej: *&%$#";

    }


    if (!input.email) {
        errors.email = "Email requerido";
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/.test(input.email)) {
        errors.email = "Email inválido";
    }


    if (!input.birthdate) {
        errors.birthdate = "Fecha de nacimiento obligatoria";
    }

    if (!input.nDni) {
        errors.nDni = "DNI obligatorio";
    }
    else if (!/^\d*$/.test(input.nDni)) {
        errors.nDni = "DNI inválido";
    }


    if (!input.username) {
        errors.username = "Usuario obligatorio";
    }
    else if (input.username.length < 3) {
        errors.username = "El usuario debe tener al menos 3 caracteres";
    }



    if (!input.password) {
        errors.password = "Contraseña obligatoria";
    }
    if (!input.password) {
        errors.password = "Contraseña obligatoria"
    } else if (input.password.length < 8) {
        errors.password = "La contraseña debe tener al menos 8 caracteres"  
    } else if (!/[A-Z]/.test(input.password)) {
        errors.password = "La contraseña debe tener al menos una letra mayúscula"
    } else if (!/[a-z]/.test(input.password)) {
        errors.password = "La contraseña debe tener al menos una letra minúscula"
    }
    else if (!/\d/.test(input.password)) {
        errors.password = "La contraseña debe tener al menos un número"
    } else if (!/[^a-zA-Z0-9]/.test(input.password)) {
        errors.password = "La contraseña debe tener al menos un caracter especial"
    } else if (input.password.length > 25) {
        errors.password = "La contraseña no puede tener más de 25 caracteres"
    }


    if (!input.confirmPassword) {
        errors.confirmPassword = "Confirmación de contraseña obligatoria";
    }
    else if (input.confirmPassword !== input.password) {
        errors.confirmPassword = "Las contraseñas no coinciden";
    }


    return errors;

}
