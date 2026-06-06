import CreateUserInputDto from '../dtos/create-user-input-dto.js';
import DeleteUserInputDto from '../dtos/delete-user-input-dto.js';
import GetUserInputDto from '../dtos/get-user-input-dto.js';
import UpdateUserInputDto from '../dtos/update-user-input-dto.js';
import {prisma} from "../prisma/prisma.js"

export default class UserRepository {
    async getAllUserById(id: number){
        const user = await prisma.user.findMany({
            where: {id: id}
        })
        return user
    }
    async getAllUserByEmail(email: string){
        const user = await prisma.user.findMany({
            where: {email: email}
        })
        return user
    }
    async getAllUserByName(name: string){
        const user = await prisma.user.findMany({
            where: {name: name}
        })
        return user
    }
    async getUserId(id: number){
        const user = await prisma.user.findUnique({
            where: {id: id},
            select: {
                id: true
            }
        })
        return user
    }
    async getUserEmail(email: string){
        const user = await prisma.user.findUnique({
            where: {email: email},
            select: {
                email: true
            }
        })
        return user
    }
    async createUser(input: CreateUserInputDto){
        const user = await prisma.user.create({
            data: input
        })
        return user
    }
    async updateUserById(id: number, input: UpdateUserInputDto){
        const user = await prisma.user.update({
            where: {
                id: id
            },
            data: input
        })
        return user
    }
    async deleteUserById(id: number){
        const user = await prisma.user.delete({
            where: {id: id}
        })
        return user
    }
}