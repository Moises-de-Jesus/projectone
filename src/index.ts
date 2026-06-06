import express, { Express } from 'express';
import userRouter from './routes/user-routes.js';

const app: Express=express()
const port: Number=Number(process.env.PORT) || 3000
app.use(express.json())
app.use("/",userRouter)

app.listen(port, () => {console.log(`Starting Api on port ${port}`)})