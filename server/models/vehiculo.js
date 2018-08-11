const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let vehiculoSchema = new Schema({
    tipo: {
        type: String,
        required: [true, 'Es necesario ingresar el tipo']
    },
    placa: {
        type: String,
        unique: true,
        required: [true, 'Es necesario ingresar la placa']
    },
    fecha_soat: {
        type: Date,
        required: [true, 'Es necesario ingresar una fecha soat']
    }
});

vehiculoSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });

module.exports = mongoose.model('Vehiculo', vehiculoSchema);