//Sentencia switch, es una estructura de control que permite ejecutar diferentes bloques de código
//según el valor de una expresión. Es una alternativa a múltiples sentencias if-else cuando se tienen
//varias condiciones basadas en el mismo valor.
//Sintaxis básica de una sentencia switch:
/*
switch (expresión) {    
    case valor1:    
        // Bloque de código a ejecutar si expresión === valor1
        break;    
    case valor2:    
        // Bloque de código a ejecutar si expresión === valor2  
        break;  
    // Puedes tener tantos casos como necesites    
    default:    
        // Bloque de código a ejecutar si ninguno de los casos anteriores coincide
}
*/

//Dia de la semana implementado con switch
let dia = 5;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;      
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo"); 
        break;     
    default:
        console.log("Día no válido");
}   