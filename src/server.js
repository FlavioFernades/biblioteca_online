require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');
const livrosRoutes = require('./routes/livros.routes');
const authRoutes = require('./routes/auth.routes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/livros', authMiddleware, livrosRoutes);

app.get('/', (req, res) => res.send('API da Biblioteca Online online!'));

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
