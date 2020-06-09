// Importar sequelize
const Sequilize = require("sequelize");
// Importar la configuración de la base de datos
const db = require("../config/db");
// Importando a  slug
const slug = require("slug");
// Importando el shortid
const shortid = require("shortid");

// Definición del modelo
const Proyecto = db.define(
  "proyecto",
  {
    nombre: {
      type: Sequilize.STRING,
    },
    nombre: {
        type: Sequilize.STRING,
      },
      nombre: {
        type: Sequilize.STRING,
      },
    url: {
      type: Sequilize.STRING,
    },
  },
  {
    hooks: {
      beforeCreate(proyecto) {
        console.log("Antes de insertar en la base de datos");
        const url = slug(proyecto.calculo).toLowerCase();

        proyecto.url = `${url}_${shortid.generate()}`;
      },
      beforeUpdate(proyecto) {
        console.log("Antes de actualizar en la base de datos");
        const url = slug(proyecto.nombre).toLowerCase();

        proyecto.url = `${url}_${shortid.generate()}`;
      },
    },
  }
);

// Importar el modelo para poder utilizarlo
module.exports = Proyecto;
