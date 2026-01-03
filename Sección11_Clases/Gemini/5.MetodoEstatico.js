/*
1. ¿Qué es un método estático? (static)
Un método estático es una función definida dentro de una clase que no 
necesita que crees una instancia (un objeto con new) para ser ejecutada.
     - Método normal (de instancia): Lo usa el objeto (ej. "El coche de Juan se mueve").
     - Método estático: Lo usa la Clase (ej. "La empresa de coches calcula un impuesto").

La regla de oro: Dentro de un método estático no puedes usar this para acceder a los 
atributos del objeto (como this._marca), porque el método le pertenece a la clase, 
y la clase no sabe qué marca tiene un coche individual.

2. Sintaxis y Aplicación
Para definirlo, simplemente antepones la palabra clave static

¡Excelente elección! Los métodos estáticos son el "siguiente nivel" para organizar código de forma profesional. Hasta ahora, hemos visto que las clases son como fábricas de objetos (coches, personas, animales). Los métodos estáticos son herramientas que pertenecen a la fábrica misma, no a los productos que salen de ella.

1. ¿Qué es un método estático? (static)
Un método estático es una función definida dentro de una clase que no necesita que crees una instancia (un objeto con new) para ser ejecutada.

Método normal (de instancia): Lo usa el objeto (ej. "El coche de Juan se mueve").

Método estático: Lo usa la Clase (ej. "La empresa de coches calcula un impuesto").

La regla de oro: Dentro de un método estático no puedes usar this para acceder a los atributos del objeto (como this._marca), porque el método le pertenece a la clase, y la clase no sabe qué marca tiene un coche individual.

2. Sintaxis y Aplicación
Para definirlo, simplemente antepones la palabra clave static.

3. ¿Cuándo se aplican en la vida real?
Se suelen usar para tres cosas principales:

     - Funciones de utilidad: Operaciones matemáticas, validaciones de texto o 
       formatos de fecha que no dependen de un objeto específico.
     - Fábricas (Factory methods): Métodos que crean objetos por ti bajo ciertas condiciones.
     - Contadores globales: Por ejemplo, llevar la cuenta de cuántos objetos se 
       han creado en total en toda la aplicación.

4. Ejemplo Comparativo: El Gestor de Usuarios
Imagina que tenemos una clase Usuario. Cada usuario tiene un nombre, pero la clase 
tiene una regla general sobre la longitud mínima del nombre.

**/

class Usuario {
    constructor(nombre) {
        this._nombre = nombre;
    }

    // MÉTODO NORMAL: Cada usuario saluda
    saludar() {
        return "Hola, soy " + this._nombre;
    }

    // MÉTODO ESTÁTICO: Una regla general para todos los nombres
    static validarNombre(nombre) {
        if (nombre.length < 3) {
            return "Nombre demasiado corto";
        }
        return "Nombre válido";
    }
}

// 1. Uso del método estático (Sin crear objeto)
console.log(Usuario.validarNombre("Al")); // "Nombre demasiado corto"

// 2. Uso del método normal (Necesita objeto)
let user1 = new Usuario("Roberto");
console.log(user1.saludar()); // "Hola, soy Roberto"

//🕵️ Matiz importante para el repaso:
//Fíjate que en Usuario.validarNombre(nombre), le pasamos el nombre como un parámetro. 
//Como el método es estático, no puede mirar dentro de ningún objeto, 
//así que tenemos que darle nosotros la información que necesita.


class Matematicas {
    // Método estático: una utilidad global
    static sumar(a, b) {
        return a + b;
    }

    static pi() {
        return 3.1416;
    }
}

// NO HACE FALTA HACER: let mates = new Matematicas();
// SE LLAMA DIRECTAMENTE A LA CLASE:
console.log(Matematicas.sumar(5, 10)); // Resultado: 15
console.log(Matematicas.pi());         // Resultado: 3.1416