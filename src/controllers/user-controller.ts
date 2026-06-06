import {Request,Response} from 'express'
import ControllerCreateUserInputDto from '../dtos/create-user-input-dto.js';
import ControllerDeleteUserInputDto from '../dtos/delete-user-input-dto.js';
import ControllerGetUserInputDto from '../dtos/get-user-input-dto.js';
import ControllerUpdateUserInputDto from '../dtos/update-user-input-dto.js';
import userService from '../services/user-service.js'

class UserController {
    async getUserByName(req: Request, res: Response){
    }
    async getUserByEmail(req: Request, res: Response){
    }
    async getUserById(req: Request, res: Response){
    }
    async createUser(req: Request, res: Response){
    }
    async updateUserById(req: Request, res: Response){
    }
    async delUserById(req: Request, res: Response){
    }
}
