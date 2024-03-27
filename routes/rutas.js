const express = require('express');
const router  = express.Router();
const clienteController = require('../controllers/clienteController');

// estas son las rutas de nuestro servidor

router.post ('/agregar', clienteController.agregarCliente);
router.get ('/find', clienteController.buscarCliente);
router.get ('/:id', clienteController.buscarClienteId);
router.delete ('/:id', clienteController.eliminarCliente);
router.put('/:id', clienteController.actualizarCliente);
module.exports = router;