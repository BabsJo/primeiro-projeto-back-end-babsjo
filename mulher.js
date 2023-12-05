const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostrarMulher(request, response){
    response.json({
        nome: 'Barbara Joana',
        imagem: 'aqui',
        minibio: 'Bonita e cheirosa e inteligente',
    })
}

function mostrarPorta(){
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostrarMulher))
app.listen(porta, mostrarPorta)