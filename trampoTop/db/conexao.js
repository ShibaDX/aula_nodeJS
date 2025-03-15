const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite', 
    storage: './db/bancoDeDados.db'
});

module.exports = sequelize