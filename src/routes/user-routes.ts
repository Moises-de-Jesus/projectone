import express, {Express,Router,Request,Response} from 'express';
import UserController from '../controllers/user-controller.js';
import authJwt from '../middlewares/auth.js'

const userController: UserController = new UserController()
const userRouter: Router = express.Router()

// Rotas de Usuário

userRouter.get("/clientes/name/:name", authJwt, async (req: Request,res: Response) => await userController.getAllUserByName(req,res))
userRouter.get("/clientes/email/:email", authJwt, async (req: Request,res: Response) => await userController.getAllUserByEmail(req,res))
userRouter.get("/clientes/id/:id", authJwt, async (req: Request,res: Response) => await userController.getAllUserById(req,res))
userRouter.post("/clientes/add", authJwt, async (req: Request,res: Response) => await userController.createUser(req,res))
userRouter.put("/clientes/change/:id", authJwt, async (req: Request, res: Response) => await userController.updateUserById(req, res))
userRouter.delete("/clientes/delete/:id", authJwt, async (req: Request,res: Response) => await userController.deleteUserById(req,res))

// Rotas de Login, Registro e Logout

userRouter.post("/clientes/login",async (req: Request,res: Response) => await userController.login(req,res))
userRouter.post("/clientes/register",async (req: Request,res: Response) => await userController.register(req,res))
userRouter.post("/clientes/logout", authJwt,async (req: Request,res: Response) => await userController.logout(req,res))

export default userRouter