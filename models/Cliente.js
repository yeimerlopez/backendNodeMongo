const mongoose = require  ('mongoose');

// el momdelo que se creeaca debe ser igual al de la base de datos


const clienteSchema =  mongoose.Schema({
    nombres:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true  
    },
    documento:{
        type: Number,
        required: true
    },
    correo:{
        type: String,
        required: true  
    },
    telefono:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true  
    },

}, { versionkey: false});

module.exports = mongoose.model('Cliente', clienteSchema)