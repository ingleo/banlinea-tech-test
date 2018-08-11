//Puerto
process.env.PORT = process.env.PORT || 3000;

//Ambiente 
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/trans-aso-db-local';
} else {
    urlDB = 'mongodb://admin:banlinea18@ds119081.mlab.com:19081/trans-aso-db';
}

process.env.URLDB = urlDB;