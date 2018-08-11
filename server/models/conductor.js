const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let conductorSchema = new Schema({
    nombres: {
        type: String,
        required: [true, 'Es necesario ingresar nombre']
    },
    apellidos: {
        type: String,
        required: [true, 'Es necesario ingresar apellido']
    },
    tipo_documento: {
        type: String,
        required: [true, 'Es necesario ingresar tipo de documento']
    },
    numero_documento: {
        type: String,
        unique: true,
        required: [true, 'El necesario número de documento']
    },
}, { collection: 'conductores' });

conductorSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });

module.exports = mongoose.model('Conductor', conductorSchema);