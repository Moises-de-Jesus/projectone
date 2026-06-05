import express, {Request,Response,Express} from 'express'
import {prisma} from "../prisma/prisma.js"

const app: Express=express()
const port: Number=Number(process.env.PORT) || 3000
app.use(express.json())

interface Posts{
    nomeDoAutor:string
    dataPubli:Date
    idPost:Number
    conteudo: string
    urlImagem: string
}

let posts: Posts[]=[];

let obj={}

app.get("/clientes/nome/:name",async (req:Request,res: Response) => {
    const user = await prisma.user.findMany({
        where: {
            name: String(req.params.name)
        }
    })
    if (user.length > 0){
        return res.status(200).json(user) 
    }
    res.status(400).send("Nomes não constam")
})

app.get("/clientes/email/:email",async (req:Request,res: Response) => {
    const user = await prisma.user.findUnique({
        where: {
            email: String(req.params.email)
        }
    })
    if (user){
        return res.status(200).json(user) 
    }
    res.status(400).send("Email não consta")
})

app.get("/clientes/id/:id",async (req:Request,res: Response) => {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(req.params.id)
        }
    })
    if (user){
        return res.status(200).json(user) 
    }
    res.status(400).send("ID não consta")
})

app.post("/clientes/user/add",async (req:Request,res: Response) => {
    if (req.body){
        const user=await prisma.user.findUnique({
            where: {
                email: req.body.email
            },
            select: {
                email: true
            }
        })
        if (!user){
            const newUser= await prisma.user.create({
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    adress: req.body.adress,
                    Age: req.body.Age,
                    State: req.body.State,
                    City: req.body.City
                }
            })
            return res.status(200).send("Adicionado")
        }
        return res.status(400).send("Email já consta")
    }
    res.status(400).send("requisição está sem corpo")
})

app.put("/clientes/id/:id", async (req:Request,res: Response) => {
    const hasEmail=await prisma.user.findUnique({
            where: {
                email: req.body.email
            },
            select: {
                email: true
            }})
    const hasId=await prisma.user.findUnique({
            where: {
                id: Number(req.params.id)
            },
            select: {
                id: true
            }})
    if (!hasEmail && hasId){
        const userUpdated = await prisma.user.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name: req.body.name,
                email: req.body.email,
                adress: req.body.adress,
                Age: req.body.Age,
                State: req.body.State,
                City: req.body.City}
            })
        return res.status(200).send("Atualizado")
    }
    res.status(400).send("Email já consta ou ID não consta")
    
})

app.delete("/clientes/id/:id", async (req:Request,res: Response) => {
    const userDeleted = await prisma.user.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    if (userDeleted){
        return res.status(200).send("Deletado")
    }
    res.status(400).send("ID não consta")
})

app.listen(3000, () => {console.log("Starting Api")})
