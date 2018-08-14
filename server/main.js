require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// parse application/json
app.use(bodyParser.json());

// habilitación de cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//habilitar la carpeta public
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/conductores', express.static(path.join(__dirname, '../public')));

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