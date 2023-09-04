const express = require('express');
const app = express()

const porta = 3003

app.get("/", (req, res) => {
    res.send("Bem vindo!!")
})

app.get("/exemplo", (req, res) => {
    res.send("<h1>Olá Mundoooo!</h1>")
})

app.listen(porta, ()=> {
    console.log(`Servidor rodando na porta ${porta}`);
})