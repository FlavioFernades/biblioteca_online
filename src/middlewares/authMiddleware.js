const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'segredo_super_seguro';

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ erro: 'Token não fornecido' });

  const [bearer, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ erro: 'Token inválido' });
  }
};
