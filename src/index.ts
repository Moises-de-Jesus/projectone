import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import userRouter from './routes/user-routes.js';
import swaggerDocs from './swagger.json' with {type: "json"};

const app: Express=express()
const port: Number=Number(process.env.PORT) || 3000
app.use(express.json())
app.use("/",userRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {console.log(`Starting Api on port ${port}`)})