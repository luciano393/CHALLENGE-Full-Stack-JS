const express = require('express');
const presupuestoController = require('../controllers/presupuestoControllers');
const router = express.Router();

module.exports = function() {

    // Agrega nuevos transacciones via POST
    router.post('/presupuesto',
        presupuestoController.nuevaTransaccion
    )

    // Obtiene todos los registros de transacciones
    router.get('/presupuesto',
        presupuestoController.obtenerTransacciones
    );
    
    // Obtiene un paciente en especifico (ID)
    router.get('/presupuesto/:id',
        presupuestoController.obtenerTransaccion
    );

    // Actualizar un registro con un ID especifico
    router.put('/presupuesto/:id',
        presupuestoController.actualizarTransaccion
    );

    // Elimina un registro por su ID
    router.delete('/presupuesto/:id', 
        presupuestoController.eliminarTransaccion
    )

    return router;
}