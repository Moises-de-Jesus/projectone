import UserService from '../services/user-service.js';
export default class UserController {
    userService = new UserService();
    async getAllUserByName(req, res) {
        const output = await this.userService.getUserByName({
            name: String(req.params.name),
            email: "",
            address: "",
            age: 0,
            state: "",
            city: "",
            id: 0
        });
        return res.json(output);
    }
    async getAllUserByEmail(req, res) {
        const output = await this.userService.getUserByEmail({
            name: "",
            email: String(req.params.email),
            address: "",
            age: 0,
            state: "",
            city: "",
            id: 0
        });
        return res.json(output);
    }
    async getAllUserById(req, res) {
        const output = await this.userService.getUserById({
            name: "",
            email: "",
            address: "",
            age: 0,
            state: "",
            city: "",
            id: Number(req.params.id)
        });
        return res.json(output);
    }
    async createUser(req, res) {
        const output = await this.userService.createUser({
            name: String(req.body.name),
            email: String(req.body.email),
            address: String(req.body.adress),
            age: Number(req.body.age),
            state: String(req.body.state),
            city: String(req.body.city)
        });
        return res.send(output);
    }
    async updateUserById(req, res) {
        const output = await this.userService.updateUserById({
            name: String(req.body.name),
            email: String(req.body.email),
            address: String(req.body.adress),
            age: Number(req.body.age),
            state: String(req.body.state),
            city: String(req.body.city),
            id: Number(req.params.id)
        });
        return res.send(output);
    }
    async deleteUserById(req, res) {
        const output = await this.userService.deleteUserById({
            name: "",
            email: "",
            address: "",
            age: 0,
            state: "",
            city: "",
            id: Number(req.params.id)
        });
        return res.send(output);
    }
    async register(req, res) {
        const output = await this.userService.register({
            name: String(req.body.name),
            email: String(req.body.email),
            address: String(req.body.adress),
            age: Number(req.body.age),
            state: String(req.body.state),
            city: String(req.body.city)
        });
        return res.send(output);
    }
    async login(req, res) {
        const output = await this.userService.login({
            name: String(req.body.name),
            email: String(req.body.email),
            address: String(req.body.adress),
            age: Number(req.body.age),
            state: String(req.body.state),
            city: String(req.body.city)
        });
        return res.send(output);
    }
    async logout(req, res) {
        const output = await this.userService.logout();
        return res.send(output);
    }
}
