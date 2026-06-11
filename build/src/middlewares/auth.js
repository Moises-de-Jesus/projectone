import jwt from 'jsonwebtoken';
export default function authJwt(req, res, next) {
    try {
        const token = req.headers['authorization'].split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: "No token provided" });
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: "Unauthorized" });
            }
            next();
        });
    }
    catch (error) {
        return res.status(401).json({ error: "Invalid header" });
    }
}
