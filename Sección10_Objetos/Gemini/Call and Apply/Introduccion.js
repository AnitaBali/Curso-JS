/*
📘 Teoría: Call y Apply (Cambiando el contexto)
Normalmente, el valor de this dentro de una función depende de quién llama a la función. 
Pero con call y apply, tú tienes el control total y puedes obligar a la función a usar 
el this que tú quieras.

1. ¿Para qué sirven?
Sirven para el Préstamo de Métodos. Si el Objeto A tiene una función que el Objeto B 
necesita, no hace falta que el Objeto B la escriba otra vez. Simplemente la "pide prestada" 
un momento.

2. El método .call()
Ejecuta la función inmediatamente.
---- >Primer argumento: El objeto que queremos que sea el this.
---- >Resto de argumentos: Los parámetros de la función pasados uno a uno, separados por comas.

Sintaxis: funcion.call(objetoDestino, arg1, arg2...)

3. El método .apply()
Hace exactamente lo mismo que call, pero hay una diferencia en cómo recibe los parámetros.
---- >Primer argumento: El objeto que queremos que sea el this.
---- >Resto de argumentos: Se pasan todos juntos dentro de un Array (una lista).

Sintaxis: funcion.apply(objetoDestino, [arg1, arg2...])

💡 ¿Cómo recordarlos? (Truco mnemotécnico)
Es muy común confundirlos, así que usa esta regla en inglés que nunca falla:

-----Call comienza con C de Coma (argumentos separados por comas).
-----Apply comienza con A de Array (argumentos dentro de un array).

🛠️ Ejemplo Rápido de Introducción
Imagina que tienes una función para poner multas, pero no pertenece a nadie:

**/

function ponerMulta(motivo, coste) {
    console.log(`Vehículo ${this.matricula} multado por ${motivo}. Coste: ${coste}€`);
}

let miCoche = { matricula: "1234-ABC" };

// Usando CALL (parámetros sueltos)
ponerMulta.call(miCoche, "exceso de velocidad", 100);

// Usando APPLY (parámetros en lista)
ponerMulta.apply(miCoche, ["mal aparcado", 200]);

//¿Ves la magia? La función ponerMulta no sabe qué es this.matricula hasta que nosotros 
// le "inyectamos" el objeto miCoche mediante call o apply.