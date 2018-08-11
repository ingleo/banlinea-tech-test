const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let asignacionSchema = new Schema({
    ubicacion_origen: {
        type: String,
        required: [true, 'Es necesario ingresar la ubicación de origen']
    },
    ubicacion_destino: {
        type: String,
        required: [true, 'Es necesario ingresar la ubicación de destino']
    },
    pasajero: {
        type: String,
        required: [true, 'Es necesario ingresar el pasajero']
    },
    empresa: {
        type: String,
        required: [true, 'Es necesario ingresar la empresa']
    }
});

asignacionSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });

module.exports = mongoose.model('Asignacion', asignacionSchema);