/*
1. El Formateador de Alumnos (Strings)
Crea una función llamada prepararFicha(nombre, apellido).

- Debe recibir el nombre y apellido (ej: " ana", "garcía ").
- Debe quitar los espacios vacíos y devolver una sola frase con la primera letra de cada palabra en mayúscula.

Resultado esperado: "Ana García".
**/

function prepararFicha(nombre,apellido){
    let inicialNombre=nombre.trim();
    let inicialApellido=apellido.trim();
    let nombreLimpio=inicialNombre[0].toUpperCase()+inicialNombre.slice(1);
    let ApellidoLimpio=inicialApellido[0].toUpperCase()+inicialApellido.slice(1);
    return nombreLimpio+" "+ApellidoLimpio;
}

console.log(prepararFicha(" Ana"," Garcia"));