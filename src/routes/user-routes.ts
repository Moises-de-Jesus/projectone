import express, {Express,Router,Request,Response} from 'express';
import UserController from '../controllers/user-controller.js';

const userController: UserController = new UserController()
const userRouter: Router = express.Router()

userRouter.get("/clientes/name/:name",(req: Request,res: Response) => userController.getAllUserByName(req,res))
userRouter.get("/clientes/email/:email",(req: Request,res: Response) => userController.getAllUserByEmail(req,res))
userRouter.get("/clientes/id/:id",(req: Request,res: Response) => userController.getAllUserById(req,res))
userRouter.post("/clientes/add",(req: Request,res: Response) => userController.createUser(req,res))
userRouter.put("/clientes/change/:id", (req: Request, res: Response) => userController.updateUserById(req, res))
userRouter.delete("/clientes/delete/:id",(req: Request,res: Response) => userController.deleteUserById(req,res))

export default userRouter