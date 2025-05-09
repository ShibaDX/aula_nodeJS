<<<<<<< HEAD
const express = require('express')
const Pessoa = require('./../models/Pessoa')
const router = express.Router()

// obter dados
router.get('/:id', (requisicao, resposta) => {
    let id = requisicao.params.id
    Pessoa.findAll({
    where: {
            id: id
        }
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


// alterar / permite que a rota aceite um parâmetro ID na URL
router.put('/:id', (requisicao, resposta) => {

    let objSalvar = requisicao.body

    // pega o parâmetro passado na URL e coloca em uma variável
    let id = requisicao.params.id

    Pessoa.update(objSalvar, {
        // faz a alteração no ID especificado / Exemplo de uso: http://localhost:3001/pessoas/4 - faz a alteração no ID 4
        where: {id: id} 
    })
        .then(() => {
            resposta.send('Atualizado com sucesso!')
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu erro :/')
        })
})

router.delete('/:id', (request, response) => {
    let id = request.params.id
    Pessoa.destroy({
        where: {id: id}
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
=======
const express = require('express')
const Pessoa = require('./../models/Pessoa')
const router = express.Router()

// obter dados
router.get('/:id', (requisicao, resposta) => {
    let id = requisicao.params.id
    Pessoa.findAll({
    where: {
            id: id
        }
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


// alterar / permite que a rota aceite um parâmetro ID na URL
router.put('/:id', (requisicao, resposta) => {

    let objSalvar = requisicao.body

    // pega o parâmetro passado na URL e coloca em uma variável
    let id = requisicao.params.id

    Pessoa.update(objSalvar, {
        // faz a alteração no ID especificado / Exemplo de uso: http://localhost:3001/pessoas/4 - faz a alteração no ID 4
        where: {id: id} 
    })
        .then(() => {
            resposta.send('Atualizado com sucesso!')
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu erro :/')
        })
})

router.delete('/:id', (request, response) => {
    let id = request.params.id
    Pessoa.destroy({
        where: {id: id}
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
>>>>>>> 71d2505f98509036d8c42d9240f0f50f71c42360
module.exports = router