// models/livro.js
module.exports = (sequelize, DataTypes) => {
  const Livro = sequelize.define('Livro', {
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    categoria: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    disponibilidade: DataTypes.BOOLEAN
  }, {
    timestamps: false // Desativa createdAt e updatedAt
  });

  return Livro;
};
