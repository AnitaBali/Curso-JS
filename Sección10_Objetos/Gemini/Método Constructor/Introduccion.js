/*
En programación, pasar de objetos literales a constructores es como pasar de fabricar 
juguetes a mano a tener una fábrica con moldes.

📘 Teoría: El Método Constructor
Hasta ahora, has usado objetos literales (los que abren y cierran con {}). 
El problema es que si necesitas 100 usuarios, tienes que repetir las mismas 
propiedades y métodos 100 veces. 
Si luego quieres cambiar el nombre de un método, tendrías que editar los 100 objetos.
El Constructor soluciona esto siendo una función "maestra" que define la estructura una sola vez.

1. Las 4 reglas de oro
Para que una función sea un constructor, debe cumplir lo siguiente:

-->Nombre en Mayúscula: No es obligatorio para el navegador, 
   pero sí para los programadores. Se escribe Usuario() y no usuario() 
   para saber a simple vista que es un molde.

-->Uso de this: Dentro de la función, no sabemos cómo se llamará el objeto final, 
  así que usamos this como un "nombre provisional" 
  para referirnos al objeto que se está fabricando.

-->No hay return: Normalmente, estas funciones no devuelven nada explícitamente; 
   su trabajo es solo asignar valores.

-->La palabra clave new: Esta es la más importante. Al ejecutar la función, 
  debemos poner new delante. Esto le dice a JavaScript:
"Crea un objeto vacío, asígnale este molde y devuélvelo".

2. ¿Qué ocurre internamente cuando usas new?
Cuando haces let persona = new Persona(), JavaScript hace tres cosas automáticas:

-->Crea un nuevo objeto vacío: { }.
-->Hace que this apunte a ese nuevo objeto vacío.
-->Ejecuta el código de la función para llenar ese objeto con datos.

function Coche(marca) {
    this.marca = marca;
    this.encender = function() {
        console.log(this.marca + " encendido");
    };
}

let coche1 = new Coche("Ford");
let coche2 = new Coche("Audi");
// El código de "encender" solo existe una vez en el molde.


**/

// 1. El Molde (Constructor)
function Mascota(nombre, tipo, edad) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.edad = edad;

    this.presentarse = function() {
        return "Hola, soy un " + this.tipo + " y me llamo " + this.nombre;
    };
}

// 2. Creación de objetos (Instancias)
let mascota1 = new Mascota("Rufo", "perro", 5);
let mascota2 = new Mascota("Misi", "gato", 3);

console.log(mascota1.presentarse()); // "Hola, soy un perro y me llamo Rufo"
console.log(mascota2.presentarse()); // "Hola, soy un gato y me llamo Misi"
