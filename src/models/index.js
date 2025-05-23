const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Modelos
db.Categoria = require('./categoria')(sequelize, Sequelize.DataTypes);
db.Livro = require('./Livro')(sequelize, Sequelize.DataTypes); 
db.Usuario = require('./usuario')(sequelize, Sequelize.DataTypes);

module.exports = db;
