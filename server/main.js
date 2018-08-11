require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// parse application/json
app.use(bodyParser.json());

//definición de variables de rutas
app.use(require('./routes/index'));

// Conexión a BD
mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Conexión a DB exitosa');
});

// Puerto de servidor http
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
});