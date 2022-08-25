const express = require('express')
const app = express();

const db = require('./models/connectionDB')

app.get("/", async (req, res) => (
    res.send("pagina inicial")
));

app.post("/cadastrar", async(req, res) => {
    res.send('cadastro')
})

//Para cadastrar registros precisamos de requisições do tipo post

app.listen(8080, () =>{
    console.log('server started')
})