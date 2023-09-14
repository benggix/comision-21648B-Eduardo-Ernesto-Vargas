// config/database.js

const Sequelize = require('sequelize');

module.exports = new Sequelize('proyecto-final', 'root', '', { // cambie el nombre-base, user, contraseña
  host: 'localhost', 
  dialect: 'mysql', 
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
