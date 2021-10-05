const express = require('express');
const presupuestoController = require('../controllers/presupuestoControllers');
const router = express.Router();

module.exports = function() {

    // Agrega nuevos transacciones via POST
    router.post('/v1/presupuesto',
        presupuestoController.nuevaTransaccion
    )

    // Obtiene todos los registros de transacciones
    router.get('/v1/presupuesto',
        presupuestoController.obtenerTransacciones
    );
    
    // Obtiene una transaccion en especifica (ID)
    router.get('/v1/presupuesto/:id',
        presupuestoController.obtenerTransaccion
    );

    // Actualizar un registro con un ID especifico
    router.put('/v1/presupuesto/:id',
        presupuestoController.actualizarTransaccion
    );

    // Elimina un registro por su ID
    router.delete('/v1/presupuesto/:id', 
        presupuestoController.eliminarTransaccion
    )

    return router;
}

