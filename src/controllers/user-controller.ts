import {Request,Response} from 'express'
import CreateUserInputDto from '../dtos/create-user-input-dto.js';
import DeleteUserInputDto from '../dtos/delete-user-input-dto.js';
import GetUserInputDto from '../dtos/get-user-input-dto.js';
import UpdateUserInputDto from '../dtos/update-user-input-dto.js';
import UserService from '../services/user-service.js'

export default class UserController {
    private userService: UserService=new UserService()

    async getAllUserByName(req: Request, res: Response){
        const output = await this.userService.getUserByName({
            name: String(req.params.name),
            email: "",
            adress: "",
            age: 0,
            state: "",
            city: "",
            id: 0
        })
        res.json(output)    
    }
    async getAllUserByEmail(req: Request, res: Response){
        const output = await this.userService.getUserByEmail({
            name: "",
            email: String(req.params.email),
            adress: "",
            age: 0,
            state: "",
            city: "",
            id: 0
        })
        res.json(output)    
    }
    async getAllUserById(req: Request, res: Response){
        const output = await this.userService.getUserById({
            name: "",
            email: "",
            adress: "",
            age: 0,
            state: "",
            city: "",
            id: Number(req.params.id)
        })
        res.json(output)    
    }
    async createUser(req: Request, res: Response){
        const output = await this.userService.createUser({
            name: String(req.body.name),
            email: String(req.body.email),
            adress: String(req.body.adress),
            age: Number(req.body.age),
            state: String(req.body.state),
            city: String(req.body.city)
        })
        res.send(output)
    }
    async updateUserById(req: Request, res: Response){
        const output = await this.userService.updateUserById({
            name: String(req.body.name),
            email: String(req.body.email),
            adress: String(req.body.adress),
            age: Number(req.body.age),
            state: String(req.body.state),
            city: String(req.body.city),
            id: Number(req.params.id)
        })
        res.send(output)
    }
    async deleteUserById(req: Request, res: Response){
        const output = await this.userService.deleteUserById({
            name: "",
            email: "",
            adress: "",
            age: 0,
            state: "",
            city: "",
            id: Number(req.params.id)
        })
        res.send(output)
    }
}