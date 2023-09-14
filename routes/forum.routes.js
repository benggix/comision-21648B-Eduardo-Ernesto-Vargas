const express = require('express');
const router = express.Router();

const indexRoute = require('./index.routes');
const addRoute = require('./add.routes');
const editRoute = require('./edit.routes');
const deleteRoute = require('./delete.routes');

// Usa las rutas importadas
router.use('', indexRoute);
router.use('', addRoute);
router.use('', editRoute);
router.use('', deleteRoute);

module.exports = router;
