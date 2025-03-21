const express = require('express')
const Categoria = require('./../models/Categoria')
const router = express.Router()

// obter dados
router.get('/', (requisicao, resposta) => {
    Categoria.findAll({
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

    Categoria.create(objSalvar)
    .then(() => {
        resposta.send('Cadastrou a categoria')
    })
    .catch((erro) => {
        console.log(erro)
        resposta.send('Deu ruim :(')
    })
})

// alterar
router.put('/', (requisicao, resposta) => {
    let objSalvar = {
        nome: 'CR7'
    }

    Categoria.update(objSalvar, {
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
    Categoria.destroy({
        where: {id: 8}
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