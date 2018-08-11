const express = require('express');
const router = express.Router();
const Conductor = require('../models/conductor');


// Endpoint para crear un conductor en el sistema
router.post('/', (req, res) => {
    let body = req.body;

    let conductor = new Conductor({
        nombres: body.nombres,
        apellidos: body.apellidos,
        tipo_documento: body.tipo_documento,
        numero_documento: body.numero_documento
    });

    conductor.save((err, conductorDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        res.json({
            ok: true,
            conductor: conductorDB
        });
    });
});


// Endpoint para consultar todos los conductores en el sistema
router.get('/', (req, res) => {
    Conductor.find({}, (err, conductores) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            conductores
        });
    });
});

module.exports = router;