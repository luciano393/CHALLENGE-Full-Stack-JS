const SignUp = require('../models/SingUp');

// Cuando se crea un nuevo Usuario
exports.nuevoUsuario = async (req, res, next) => {
    // Crear objeto de Usuario con datos de req.body
    const usuario = new SignUp(req.body);

    try {
        await usuario.save();
        res.json({ mensaje: 'El usuario ha sido creado...'});
    } catch (error) {
        console.log(error);
        next();
    }
}
/* Obtiene todos los usuarios */

exports.obtenerUsuarios = async (req, res, next) => {
    try {
        const usuarios = await SignUp.find({})
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Obtiene un usuario
exports.obtenerUsuario = async (req, res, next) => {
    try {
        const usuario = await SignUp.find({username : req.params.username})
        res.json(usuario);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Actualizar usuario
exports.actualizarUsuario = async (req, res, next) => {
    try {
        const transaction = await SignUp.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
    } catch (error) {
        console.log(error);
        next();
    }
}

// Eliminar usuario
exports.eliminarUsuario = async(req, res, next) => {
    try {
        await SignUp.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El usuario ha sido eliminado...'})
    } catch (error) {
        console.log(error);
        next();
    }
}