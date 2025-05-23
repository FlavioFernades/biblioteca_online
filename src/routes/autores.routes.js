const express = require("express");
const router = express.Router();

const autores = [
  { id: 1, nome: "J.R.R. Tolkien", nacionalidade: "Britânico" },
  { id: 2, nome: "Machado de Assis", nacionalidade: "Brasileiro" }
];

router.get("/", (req, res) => res.json(autores));

module.exports = router;
