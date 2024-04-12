const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');
//gracias a la dependencia dotenv, podemos traer las variables de entorno
const dotenv = require('dotenv');
dotenv.config();
PORT = process.env.PORT || 3000


// creamos nuestro servidor
const app = express();


//Enlamos la conexion a la base de datos
conectarBD();
app.use(cors());




app.use(express.json());
app.use('/api/mobilePlanet', require('../routes/rutas'));


app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT} http://localhost:3000`);
})



