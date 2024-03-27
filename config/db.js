const  mongoose = require('mongoose');
require ('dotenv').config();

const conectarBD = () => {

    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log('Base de datos conectada'))
    .catch((error) => console.log(error));
}

module.exports = conectarBD

    