const express = require('express');
const router = express.Router();
const app = express();

const conductoresRouter = require('./conductores.js');
app.use('/v1/conductores', conductoresRouter);

module.exports = app;