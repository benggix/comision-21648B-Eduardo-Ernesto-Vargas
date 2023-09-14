// implementamos express, morgan, path, body, etc..
const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');
const app = express()



// Iniciamos el server

require('dotenv').config({path:'./.env'})
const puerto = process.env.PUERTO

db.sync()
  .then(() => {
    app.listen(puerto, () => console.log(`Servidor en puerto ${puerto}`));
  })
  .catch((err) => console.error('Hubo un error al sincronizar la base de datos:', err));


// Middleware
app.use(cors())
app.use(morgan(`dev`))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// aplicamos ejs
app.set('view engine', 'ejs');

// ubicacion de mis plantillas
app.set('views', __dirname + '/views')

// Middleware (archivos) estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/forum.routes'));


