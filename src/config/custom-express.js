const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser());

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;