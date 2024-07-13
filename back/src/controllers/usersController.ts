import { Request, Response} from "express";



export const getUsersController = async (req: Request, res: Response) => {
    res.send("Obtener el listado de todos los usuarios");
}
 
export const getUserByIdController = async (req: Request, res: Response) => {
    res.send("Obtener el detalle de un usuario especifico");
}

export const  registerController = async (req: Request, res: Response) => {
    res.send("Registro de un nuevo usuario");
}

export const loginController = async (req: Request, res: Response) => {
    res.send("Login del usuario a la aplicación");
}