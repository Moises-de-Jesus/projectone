import express, {Express,Router,Request,Response} from 'express';
import UserController from '../controllers/user-controller.js';

const userController: UserController = new UserController()
const userRouter: Router = express.Router()

userRouter.get("/clientes/name/:name",async (req: Request,res: Response) => await userController.getAllUserByName(req,res))
userRouter.get("/clientes/email/:email",async (req: Request,res: Response) => await userController.getAllUserByEmail(req,res))
userRouter.get("/clientes/id/:id",async (req: Request,res: Response) => await userController.getAllUserById(req,res))
userRouter.post("/clientes/add",async (req: Request,res: Response) => await userController.createUser(req,res))
userRouter.put("/clientes/change/:id", async (req: Request, res: Response) => await userController.updateUserById(req, res))
userRouter.delete("/clientes/delete/:id",async (req: Request,res: Response) => await userController.deleteUserById(req,res))

export default userRouter