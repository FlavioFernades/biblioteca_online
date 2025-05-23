const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET || 'segredo_super_seguro';

exports.register = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) return res.status(400).json({ erro: 'Usuário já existe' });

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const novoUsuario = await Usuario.create({ nome, email, senha: senhaCriptografada });

    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao registrar usuário' });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) return res.status(401).json({ erro: 'Senha incorreta' });

    const token = jwt.sign({ id: usuario.id, email: usuario.email }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ mensagem: 'Login realizado com sucesso', token });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao realizar login' });
  }
};
