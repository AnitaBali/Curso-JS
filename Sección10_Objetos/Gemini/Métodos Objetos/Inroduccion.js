/*
Un método es, sencillamente, una función que se guarda como una propiedad de un objeto. 
Si las propiedades son el "qué es" del objeto (sustantivos), los métodos son el "qué hace" (verbos).

La herramienta clave: this
En los métodos, la palabra clave this es fundamental. Es un "autorreferencia". 
Cuando escribes this.nombre dentro de un método, le estás diciendo a JavaScript: 
"Busca la propiedad 'nombre' que pertenece a este mismo objeto donde estás ahora".

¿Por qué usamos this?
----Porque si cambias el nombre de la variable del objeto, el método sigue funcionando.
----Porque permite que el objeto sea independiente y sepa gestionar su propia información.

Sintaxis de un método
Existen dos formas de escribirlos (ambas son correctas):
-----> Clásica: nombreFuncion: function() { ... }
-----> Moderna (ES6): nombreFuncion() { ... } (Más corta y limpia).

**/

let persona={
    nombre:"Ana",
    edad:35,

    presentarse: function(){
        return "Hola, mi nombre es " +this.nombre+ " y tengo " + this.edad+ " años."
    }
}

console.log(persona.presentarse());



