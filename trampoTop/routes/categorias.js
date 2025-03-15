const express = require('express')
const Categoria = require('./../models/Categoria')
const router = express.Router()

// obter dados
router.get('/', (requisicao, resposta) => {
    resposta.send('Site Trampo top do Brasil!!!')
})

// inserir dados
router.post('/', (requisicao, resposta) => {
   
    let objSalvar = {
        nome: 'Santana'
    }

    Categoria.create(objSalvar)
    .then(() => {
        resposta.send('Cadastrou a categoria')
    })
    .catch((erro) => {
        console.log(erro)
        resposta.send('Deu ruim :(')
    })
})


// exporta o arquivo
module.exports = router