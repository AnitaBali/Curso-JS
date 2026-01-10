const crearUsuario = (nombre, edad) => ({
    id: Math.floor(Math.random() * 1000),
    nombre: nombre,
    edad: edad
});

console.log(crearUsuario("Ana", 25));
// Resultado: { id: 452, nombre: "Ana", edad: 25 }


/*
Este es el "truco ninja". Para devolver un objeto sin usar la palabra return, 
debes envolver el objeto entre paréntesis ( ). Si no lo haces, JS piensa que las llaves 
{ } son el cuerpo de la función y no el objeto.
**/