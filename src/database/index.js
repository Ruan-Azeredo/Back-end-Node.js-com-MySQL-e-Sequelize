const Sequelize = require('sequelize');
const dbconfig = require('../config/config.json');

const User =  require('../models/User')

const connection = new Sequelize(dbconfig);

User.init(connection);

// Este arquivo puxa a o .json que faz conexão com o banco de dados e conecta ele com o model que é o meio o qual a aplicação se comunica com o banco de dados

module.exports = connection;