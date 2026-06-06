import {Request,Response,Express} from 'express'
import UserRepository from '../repositories/user-repository.js'
import ControllerCreateUserInputDto from '../dtos/create-user-input-dto.js';
import ControllerDeleteUserInputDto from '../dtos/delete-user-input-dto.js';
import ControllerGetUserInputDto from '../dtos/get-user-input-dto.js';
import ControllerUpdateUserInputDto from '../dtos/update-user-input-dto.js';

const userRepository = new UserRepository()

export default class UserService {
    async getUserByName(req: Request, res: Response, input: GetUserInputDto){
        const user = await userRepository.getAllUserbyName(input.name)
        if (user.length > 0){
            return res.status(200).json(user) 
        }
        res.status(400).send("Nomes não constam")
    }
    async getUserByEmail(req: Request, res: Response, input: GetUserInputDto){
        const user = await userRepository.getAllUserbyEmail(input.email)
        if (user){
            return res.status(200).json(user) 
        }
        res.status(400).send("Email não consta")
    }
    async getUserById(req: Request, res: Response,input: GetUserInputDto){
        const user = await userRepository.getAllUserbyId(input.id)
        if (user){
            return res.status(200).json(user) 
        }
        res.status(400).send("ID não consta")
    }
    async createUser(req: Request, res: Response, input: CreateUserInputDto){
        if (req.body){
            const user = await userRepository.getUserEmail(input.email)
            if (!user){
                await userRepository.createUser(input)
                return res.status(200).send("Adicionado")
            }
            return res.status(400).send("Email já consta")
        }
        res.status(400).send("requisição está sem corpo")
    }
    async updateUserById(req: Request, res: Response, input: UpdateUserInputDto){
        const hasEmail=await userRepository.getUserEmail(input.email)
        const hasId=await userRepository.getUserId(input.id)
        if (!hasEmail && hasId){
            await userRepository.updateUserById(Number(req.params.id), input)
            return res.status(200).send("Atualizado")
        }
        res.status(400).send("Email já consta ou ID não consta")
    }
    async delUserById(req: Request, res: Response, input: DeleteUserInputDto){
        const userDeleted = await userRepository.deleteUserById(input.id)
        if (userDeleted){
            return res.status(200).send("Deletado")
        }
        res.status(400).send("ID não consta") 
    }
}