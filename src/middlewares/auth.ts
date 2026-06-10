import jwt from 'jsonwebtoken';

export default function authJwt(req: any, res: any, next: any) {
    try{
        const token = req.headers['authorization'].split(' ')[1]
        if (!token) {
        return res.status(401).json({error: "No token provided"})
    }
    jwt.verify(token, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
        if (err){
            return res.status(401).json({error: "Unauthorized"})
        }
        next()
    })
    }
    catch (error) {
        return res.status(401).json({error: "Invalid header"})
    }
}