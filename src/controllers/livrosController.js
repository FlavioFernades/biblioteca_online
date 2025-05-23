const { Livro } = require('../models');

exports.listarLivros = async (req, res) => {
  try {
    const livros = await Livro.findAll();
    res.json(livros);
  } catch (error) {
    console.error('Erro ao buscar livros:', error); // 👈 Adicionado para debug
    res.status(500).json({ erro: 'Erro ao buscar livros' });
  }
};

exports.adicionarLivro = async (req, res) => {
  try {
    const { titulo, autor, categoria, ano } = req.body;
    const novoLivro = await Livro.create({ titulo, autor, categoria, ano });
    res.status(201).json(novoLivro);
  } catch (error) {
    console.error('Erro ao adicionar livro:', error); // 👈 Adicione aqui
    res.status(500).json({ erro: 'Erro ao adicionar livro' });
  }
};
