// ==== src/controllers/autores.controller.js ====
const { Autor } = require('../models');

exports.getAll = async (req, res) => {
  const autores = await Autor.findAll();
  res.json(autores);
};

exports.create = async (req, res) => {
  const autor = await Autor.create(req.body);
  res.status(201).json(autor);
};

exports.update = async (req, res) => {
  await Autor.update(req.body, { where: { id: req.params.id } });
  res.sendStatus(204);
};

exports.remove = async (req, res) => {
  await Autor.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};