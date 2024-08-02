
// import ICredential from "../interfaces/ICredential"
import { CredentialModel } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";


// const arrOfUsers: ICredential[] = [];

export const createCredentialService = async (username: string, password: string): Promise<Credential> => {
    const newCredential = await CredentialModel.create({ username, password })
    await CredentialModel.save(newCredential)
    return newCredential;


}

export const checkCredentialService = async (username: string, password: string): Promise<Credential | string> => {
    const credential = await CredentialModel.findOneBy({ username })

    if (!credential) {
        return "Usuario no existente"
    }

    if (credential.password !== password) {
        return "Contraseña incorrecta"
        
    }

    return credential
}

