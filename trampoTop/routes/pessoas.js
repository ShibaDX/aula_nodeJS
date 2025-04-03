const express = require('express')
const Pessoa = require('./../models/Pessoa')
const router = express.Router()

// obter dados
router.get('/', (requisicao, resposta) => {
    Pessoa.findAll({
        /*where: {
            id: 1
        }*/
    })
    .then((dados) => {
        resposta.send(dados)
    })
    .catch((erro) => {
        console.log(erro)
        resposta.send('Lasco')
    })
})

// inserir dados
router.post('/', (requisicao, resposta) => {
   
    let objSalvar = requisicao.body

    Pessoa.create(objSalvar)
    .then(() => {
        resposta.send('Cadastrou a pessoa')
    })
    .catch((erro) => {
        console.log(erro)
        resposta.send('Deu ruim :(')
    })
})

// alterar
router.put('/', (requisicao, resposta) => {
    let objSalvar = requisicao.body

    Pessoa.update(objSalvar, {
        where: {id: 4}
    })
        .then(() => {
            resposta.send('Atualizado com sucesso!')
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu erro :/')
        })
})

router.delete('/', (request, response) => {
    Pessoa.destroy({
        where: {id: 5}
    })
    .then(() => {
        response.send('Deletado com sucesso')
    })
    .catch((erro) => {
        console.log(erro)
        response.send('Erro ao excluir')
    })
})

// exporta o arquivo
module.exports = router