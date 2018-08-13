const express = require('express');
const router = express.Router();
const Conductor = require('../models/conductor');
const _ = require('underscore');


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

        res.send(conductores);
    });
});

//Endpoint para consultar un conductor en el sistema por id
router.get('/:id', (req, res) => {
    let id = req.params.id;

    Conductor.findById(id, (err, conductorDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        res.json(conductorDB);
    });
});

//Endpoint para editar un conductor en el sistema
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['nombres', 'apellidos', 'tipo_documento', 'numero_documento', 'estado']);

    Conductor.findByIdAndUpdate(id, body, { new: true }, (err, conductorDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        res.json(conductorDB);
    });
});

//Endpoint para borrar un conductor del sistema (borrado lógico que cambia el estado a false)
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['estado']);

    let cambiaEstado = {
        estado: false
    };

    Conductor.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, conductorDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        res.json(conductorDB);
    });
});


module.exports = router;