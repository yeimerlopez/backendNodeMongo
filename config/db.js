const  mongoose = require('mongoose');
require ('dotenv').config();

//Aca se crea una funcion para conectarse a la base de datos
const conectarBD = () => {
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log('Base de datos conectada.'))
    .catch((error) => console.log(error));
}

module.exports = conectarBD

    