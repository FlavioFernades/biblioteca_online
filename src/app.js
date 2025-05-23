const express = require('express');
const app = express();
const livrosRoutes = require('./routes/livros.routes');

app.use(express.json());
app.use('/livros', livrosRoutes);

module.exports = app;
