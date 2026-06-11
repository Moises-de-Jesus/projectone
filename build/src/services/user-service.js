import UserRepository from '../repositories/user-repository.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const userRepository = new UserRepository();
export default class UserService {
    async getUserByName(input) {
        const user = await userRepository.getAllUserByName(input.name);
        if (user.length > 0) {
            return user;
        }
        return "Nomes não constam";
    }
    async getUserByEmail(input) {
        const user = await userRepository.getAllUserByEmail(input.email);
        if (user) {
            return user;
        }
        return "Email não consta";
    }
    async getUserById(input) {
        const user = await userRepository.getAllUserById(input.id);
        if (user) {
            return user;
        }
        return "ID não consta";
    }
    async createUser(input) {
        if (input.email) {
            const user = await userRepository.getUserByEmail(input.email);
            if (!user) {
                const hash = await bcrypt.hash(input.address, 10);
                input.address = hash;
                await userRepository.createUser(input);
                return "Adicionado";
            }
            return "Email já consta";
        }
        return "requisição está sem corpo ou com corpo incompleto";
    }
    async updateUserById(input) {
        const hasEmail = await userRepository.getUserByEmail(input.email);
        const hasId = await userRepository.getUserById(input.id);
        if (!hasEmail && hasId) {
            await userRepository.updateUserById(Number(input.id), input);
            return "Atualizado";
        }
        return "Email já consta ou ID não consta";
    }
    async deleteUserById(input) {
        const userDeleted = await userRepository.deleteUserById(input.id);
        if (userDeleted) {
            return "Deletado";
        }
        return "ID não consta";
    }
    async register(input) {
        const result = await this.createUser(input);
        if (result === "Adicionado") {
            const token = jwt.sign({ name: input.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return { resposta: result, token: token };
        }
        return { resposta: result };
    }
    async login(input) {
        const user = await userRepository.getUserByEmail(input.email);
        if (user && await bcrypt.compare(input.address, user.address)) {
            const token = jwt.sign({ name: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return { resposta: "Login bem sucedido", token: token };
        }
        return { resposta: "Email ou senha incorretos" };
    }
    async logout() {
        return { message: "Logout bem sucedido" };
    }
}
