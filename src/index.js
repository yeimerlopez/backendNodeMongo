const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

// creamos nuestro servidor
const app = express();


//Enlamos la base de datos

conectarBD();
app.use(cors());

app.use(express.json());
app.use('/api/clientes', require('../routes/rutas'));


app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000 http://localhost:3000');
})



