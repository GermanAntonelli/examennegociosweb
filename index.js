// Importar modulo
const express = require('express');


const app = express();

app.listen(7000, () => {
    console.log("Servidor ejecutandose en puerto 7000");
}
);
// pedimos los valores 
function calculo(cantidad,cuota = 0.6,interes,totaltext, amortizacion, n){
	
	// Calculo del subtotal
    cuotatotal = cuota*cantidad / 1 - (1 + cantidad) ** n;
    amortizacion = cuotatotal - interes; 
	inputtext.value=subtotal;
	
        //Calculo del total
	total = eval(totaltext.value);
	totaltext.value = total + subtotal;
}