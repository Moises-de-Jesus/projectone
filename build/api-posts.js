import express from 'express';
const app = express();
const port = 3000;
app.use(express.json());
let posts = [{ titulo: "Oi", idpost: 89 }];
app.get("/clientes/:id", (req, res) => {
    let post = posts.find((pst) => pst.idpost === Number(req.params.id));
    res.status(200).json(post);
});
app.post("/clientes/:id", (req, res) => {
    posts.push(req.body);
    res.status(200).send("Adicionado");
});
app.put("/clientes/:id", (req, res) => {
});
app.delete("/clientes/:id", (req, res) => {
});
app.listen(3000, () => { console.log("Starting Api"); });