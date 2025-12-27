/*

Aquí tienes las 4 herramientas principales para visualizar objetos como un profesional:

1. console.log(objeto) vs console.log("Texto: " + objeto)
Hay una diferencia crítica aquí:
----Correcto: console.log(usuario); -> El navegador te muestra un nodo interactivo que puedes 
    abrir y cerrar para ver las propiedades.
----Error común: console.log("Mi usuario es: " + usuario); -> Al concatenar con texto, 
    JavaScript convierte el objeto a un String genérico y verás el famoso e inútil: [object Object].

2. console.table(objeto) (El favorito de los programadores)
Esta es la joya de la corona. Si tu objeto tiene muchas propiedades, 
esta función crea una tabla organizada con dos columnas: index (la clave) 
y Value (el valor). Es perfecto para ver el estado de un objeto de un solo vistazo.

3. Object.keys() y Object.values()
A veces no quieres ver todo el objeto, sino solo sus nombres o solo sus datos.
----Object.keys(usuario): Te devuelve un Array (una lista) con todos los nombres 
    de las propiedades (["nombre", "apellido", "edad"]).
----Object.values(usuario): Te devuelve una lista con los contenidos (["Ana", "García", 25]).

4. JSON.stringify(objeto, null, 2)
A veces necesitas ver el objeto como un texto real (un String), 
por ejemplo, para imprimirlo en la pantalla de una página web o guardarlo en un archivo.
----El null, 2 al final sirve para que el texto esté "formateado" con espacios y 
    saltos de línea, haciéndolo legible para humanos.
**/

let curso = {
    titulo: "JavaScript desde Cero",
    duracion: "40 horas",
    temas: ["Variables", "Objetos", "Funciones"],
    finalizado: false
};

console.table(curso);
console.log(Object.keys(curso));

let cadena=JSON.stringify(curso);
console.log(cadena);