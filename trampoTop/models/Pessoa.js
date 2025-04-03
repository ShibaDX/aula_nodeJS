const Sequelize = require('sequelize')
const db = require('./../db/conexao')

const Pessoa = db.define('pessoas', {
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    }

})

module.exports = Pessoa