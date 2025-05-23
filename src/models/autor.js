// ==== src/models/autor.js ====
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Autor = sequelize.define('Autor', {
  nome: DataTypes.STRING
});

module.exports = Autor;
