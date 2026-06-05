import { CreateUserInputDto } from "../controllers/dtos/create-user-input-dto.js";
import { UpdateUserInputDto } from "../controllers/dtos/update-user-input-dto.js";

class UserService {
    getUserByName(name: string){
    }
    getUserById(id: number){
    }
    getUserByEmail(email: string){
    }
    createUser(input: CreateUserInputDto | UpdateUserInputDto){
    }
    updateUserById(input: CreateUserInputDto | UpdateUserInputDto){
    }
    delUserById(id : number){
    }
}