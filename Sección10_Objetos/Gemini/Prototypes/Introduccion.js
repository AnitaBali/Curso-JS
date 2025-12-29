/*
📘 Teoría: Prototypes (Prototipos)
Hasta ahora, hemos usado el Constructor para meter tanto los datos como las funciones 
(métodos) dentro del objeto.

El problema del "Desperdicio de Memoria"
Cada vez que haces new Usuario(), JavaScript reserva un espacio de memoria. 
Si el método saludar está dentro del constructor, y creas 1.000 usuarios, 
tendrás 1.000 copias de la misma función saludar. 
Esto hace que tu aplicación sea más lenta y pesada.

La solución: El Prototipo
El Prototype es un objeto especial que está unido a la función constructora. 
Es como una "nube" o "biblioteca comunitaria" donde guardamos los métodos.

------Los datos únicos (nombre, edad, color) se quedan dentro del constructor.
------Las acciones (métodos) se mueven fuera, al prototype.

De esta forma, aunque tengas 1.000 objetos, solo existe una sola copia de la función 
en la memoria, y todos los objetos saben ir a buscarla allí cuando la necesitan.

La sintaxis
Se escribe el nombre de la función constructora, luego .prototype y el nombre del método:

function Perro(nombre) {
    this.nombre = nombre; // Dato único
}

// Método compartido en el prototipo
Perro.prototype.ladrar = function() {
    console.log(this.nombre + " dice: ¡Guau!");
};

📘 Teoría Extra: La "Cadena de Prototipos" (Prototype Chain)
Cuando tú escribes objeto.metodo(), JavaScript no se rinde si no lo encuentra dentro del objeto. 
Hace una búsqueda en tres pasos:

1. Busca en el objeto propio: ¿Tiene este coche el método detalles escrito dentro de él? 
   (Si no, sube un nivel).

2. Busca en el Prototipo: ¿Tiene el constructor Coche este método en su prototype? 
   (Si está ahí, lo ejecuta).

3. Busca en el Prototipo de Object: Si no está en ninguno de los anteriores, 
   llega al padre de todos los objetos en JavaScript (Object). Si tampoco está ahí, 
   entonces te da el error: "is not a function".

¿Por qué es esto increíble? Porque puedes tener 1 millón de objetos "estudiantes" y ninguno de 
ellos ocupa memoria con el código de sus funciones. Todos "leen" del mismo manual de instrucciones 
que es el Prototipo.
**/

// 1. El Constructor: Solo los DATOS
function RelojLujo(marca, precio) {
    this.marca = marca;
    this.precio = precio;
}

// 2. El Prototipo: Solo las ACCIONES (Fuera del constructor)
RelojLujo.prototype.mostrarPrestigio = function() {
    console.log("Soy un " + this.marca + " y cuesto " + this.precio + "€");
};

// 3. Creación de los objetos
let rolex = new RelojLujo("Rolex", 15000);
let omega = new RelojLujo("Omega", 8000);

// 4. Uso de los métodos
rolex.mostrarPrestigio();
omega.mostrarPrestigio();

// Prueba de oro:
console.log(rolex.hasOwnProperty('marca')); // true (la marca es SUYA)
console.log(rolex.hasOwnProperty('mostrarPrestigio')); // false (el método NO es suyo, es del prototipo)