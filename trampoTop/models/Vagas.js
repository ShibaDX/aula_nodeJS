// importações
const Sequelize = require('sequelize')
const db = require('./../db/conexao')

                     // nome da tabela
const Vagas = db.define('vagas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    salario: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nova_vaga: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}) 

module.exports = Vagas