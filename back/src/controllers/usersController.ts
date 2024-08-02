import { Request, Response } from "express";
import { createCredentialService, checkCredentialService } from "../services/credentialService";
import { getUserService, getUserByIdService, createUserService } from "../services/userService";
import { User } from "../entities/User";


export const getUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getUserService();
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
}

export const getUserByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user: User | null = await getUserByIdService(Number(id));
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
}

export const registerController = async (req: Request, res: Response) => {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        const newUser: User = await createUserService({ name, email, birthdate, nDni }, username, password);
        res.status(201).json({ message: "Usuario creado exitosamente" });
    }
    catch (error) {
        res.status(400).json({ message: "Error los datos son incorrectos o faltan datos" });
    }
}


export const loginController = async (req: Request, res: Response) => {

    try {
        const { username, password } = req.body;
        const user = await checkCredentialService(username, password);

        if (typeof user === "string") {
            res.status(400).json({ message: user });
        }
        else {
            const getUser = await getUserByIdService(user.id);
            res.status(200).json({ login: true, user: getUser })
        }

    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }


}
