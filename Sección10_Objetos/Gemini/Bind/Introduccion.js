/*
📘 Último concepto: Bind (La función "enlatada")
el nombre correcto es bind() (que en inglés significa "vincular" o "atar").

¿Cuál es la diferencia?
---- call y apply ejecutan la función al instante.
---- bind NO ejecuta la función. Lo que hace es crear una copia de la función con 
     el this ya "atado" (vinculado) para siempre, para que la uses más tarde.

Analogía: Call es como pedir comida para que te la traigan ya hecha. 
Bind es como comprar un kit de cocina: lo tienes guardado en la despensa 
y lo usas cuando tú quieras, pero los ingredientes ya vienen seleccionados.

bind() crea una nueva función idéntica a la original pero con el this "pegado con pegamento". 
No importa quién llame a esa nueva función más tarde, el this siempre será el objeto que tú elegiste.
**/

let usuario = { nombre: "Alex" };

function saludar() {
    console.log("Hola " + this.nombre);
}

// Creamos una nueva función vinculada a Alex
let saludarAlex = saludar.bind(usuario); 

// No pasa nada hasta que yo decida llamarla:
saludarAlex(); // "Hola Alex"