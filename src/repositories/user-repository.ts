import ServiceCreateUserInputDto from '../services/dtos/input/service-create-user-input-dto.js';
import ServiceGetUserInputDto from '../services/dtos/input/service-get-user-input-dto.js';
import ServiceUpdateUserInputDto from '../services/dtos/input/service-update-user-input-dto.js';
import ServiceDeleteUserInputDto from '../services/dtos/input/service-delete-user-input-dto.js';
import {prisma} from "../prisma/prisma.js"
import { isDbNull, itxClientDenyList } from '@prisma/client/runtime/client';

export default class UserRepository {
    async getAllUserbyId(id: number){
        const user = await prisma.user.findMany({
            where: {id: id}
        })
        return user
    }
    async getAllUserbyEmail(email: string){
        const user = await prisma.user.findMany({
            where: {email: email}
        })
        return user
    }
    async getAllUserbyName(name: string){
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
    async createUser(input: ServiceCreateUserInputDto){
        const user = await prisma.user.create({
            data: input
        })
        return user
    }
    async updateUserById(id: number, input: ServiceUpdateUserInputDto){
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