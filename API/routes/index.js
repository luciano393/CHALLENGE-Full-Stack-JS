const { request } = require('express');
const express = require('express');
const signupController = require('../controllers/signupControllers');
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

    // Agrega un nuevo usuario
    router.post('/signup',
        signupController.nuevoUsuario
    )
    // Obtiene usuarios
    router.get('/signup',
        signupController.obtenerUsuarios
    )
    
    // Obtiene un Usuario
    router.get('/signup/:username',
        signupController.obtenerUsuario
    )
    // Actualiza usuario
    router.put('/signup/:id',
        signupController.actualizarUsuario
    )
    // Elimina usuario
    router.delete('/signup/:id',
        signupController.eliminarUsuario
    )


    return router;
}

