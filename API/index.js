const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = 4000;

dotenv.config()

// Crear el servidor
const app = express();

// Habilitar cors
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    const existe = whitelist.some( dominio => dominio === origin);
    if (existe) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por CORS'))
    }
  }
}
app.use( cors() );

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect(process.env.PRESUPUESTO_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log("Data base connected"));


// Habilitar el body-parser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Habilitar routing
app.use('/', routes())

// Puerto y arrancar el servidor 
app.listen((process.env.PORT || 4000), () => {
    console.log('Servidor funcionando...');
})
