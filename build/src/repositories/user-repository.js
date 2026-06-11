import { prisma } from "../prisma/prisma.js";
export default class UserRepository {
    async getAllUserById(id) {
        const user = await prisma.user.findMany({
            where: { id: id }
        });
        return user;
    }
    async getAllUserByEmail(email) {
        const user = await prisma.user.findMany({
            where: { email: email }
        });
        return user;
    }
    async getAllUserByName(name) {
        const user = await prisma.user.findMany({
            where: { name: name }
        });
        return user;
    }
    async getUserById(id) {
        const user = await prisma.user.findUnique({
            where: { id: id }
        });
        return user;
    }
    async getUserByEmail(email) {
        const user = await prisma.user.findUnique({
            where: { email: email }
        });
        return user;
    }
    async SearchUser(email, address) {
        const user = await prisma.user.findUnique({
            where: { email: email, address: address },
        });
        return user;
    }
    async createUser(input) {
        const user = await prisma.user.create({
            data: input
        });
        return user;
    }
    async updateUserById(id, input) {
        const user = await prisma.user.update({
            where: {
                id: id
            },
            data: input
        });
        return user;
    }
    async deleteUserById(id) {
        const user = await prisma.user.delete({
            where: { id: id }
        });
        return user;
    }
}
