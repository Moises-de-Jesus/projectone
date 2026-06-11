import express from 'express';
import UserController from '../controllers/user-controller.js';
import authJwt from '../middlewares/auth.js';
const userController = new UserController();
const userRouter = express.Router();
// Rotas de Usuário
userRouter.get("/clientes/name/:name", authJwt, async (req, res) => await userController.getAllUserByName(req, res));
userRouter.get("/clientes/email/:email", authJwt, async (req, res) => await userController.getAllUserByEmail(req, res));
userRouter.get("/clientes/id/:id", authJwt, async (req, res) => await userController.getAllUserById(req, res));
userRouter.post("/clientes/add", authJwt, async (req, res) => await userController.createUser(req, res));
userRouter.put("/clientes/change/:id", authJwt, async (req, res) => await userController.updateUserById(req, res));
userRouter.delete("/clientes/delete/:id", authJwt, async (req, res) => await userController.deleteUserById(req, res));
// Rotas de Login, Registro e Logout
userRouter.post("/clientes/login", async (req, res) => await userController.login(req, res));
userRouter.post("/clientes/register", async (req, res) => await userController.register(req, res));
userRouter.post("/clientes/logout", authJwt, async (req, res) => await userController.logout(req, res));
export default userRouter;
