const { Categoria } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const categorias = await Categoria.findAll();
      res.json(categorias);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao listar categorias' });
    }
  },

  async criar(req, res) {
    try {
      const novaCategoria = await Categoria.create(req.body);
      res.status(201).json(novaCategoria);
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao criar categoria' });
    }
  }
};
