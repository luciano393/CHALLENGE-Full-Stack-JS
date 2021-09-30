const Presupuesto = require('../models/Presupuesto');

// Cuando se crea una nueva transacción
exports.nuevaTransaccion = async (req, res, next) => {
    // crear objeto de transaccion con datos de req.body
    const presupuesto = new Presupuesto(req.body);

    try {
        await presupuesto.save();
        res.json({ mensaje: 'La transaccion ha sido añadida...'});
    } catch (error) {
        console.log(error);
        next();
    }
}

/* Obtiene todos los pacientes */

exports.obtenerTransacciones = async (req, res, next) => {
    try {
        const transacciones = await Presupuesto.find({})
        res.json(transacciones);
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Obtiene una transaccion en especifico por su ID */
exports.obtenerTransaccion = async (req, res, next) => {
    try {
        const transaccion = await Presupuesto.findById(req.params.id);
        res.json(transaccion);
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Actualiza un registro por su ID */
exports.actualizarTransaccion = async (req, res, next) => {
    try {
        const transaccion = await Presupuesto.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(transaccion);
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Elimina una transaccion por su ID */
exports.eliminarTransaccion = async(req, res, next) => {
    try {
        await Presupuesto.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'La transaccion ha sido eliminada...'})
    } catch (error) {
        console.log(error);
        next();
    }
}