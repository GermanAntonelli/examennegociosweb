// importando modulos
const Proyecto = require("./models/Proyecto");

// muestra todos los proyectos del usuario
exports.home = (req, res, next) => {
    res.render("crear_proyecto");
}

//mostrando los proyectos del usuario 
exports.home = (req, res, next) => {
    const { calculo } ,req,body;
    const errores = [];
   
    if(!calculo) {
        errores.push({ error: "El campo esta vacio"});
    }


    // por si surgen errores
    if(errores.lengt) {
       res.render("crear_proyecto", {
           errores,
       });
    } else {
        res.send("Tomando los valores");
    }
};