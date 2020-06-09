// importamos express
const express = require("express");
const routes = express.Router();

// Tenemos que importar los controladores

module.exports = function() {
    routes.get("/", proyectosController.home);

    routes.get("/", proyectosController.nuevoProyecto);

    return routes;
};