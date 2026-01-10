/*
🛡️ Teoría: El Trapecista y la Red
Imagina que tu código es un trapecista haciendo piruetas.
-----> Si todo sale bien, genial.
-----> Pero si se resbala (ocurre un error), no queremos que se estrelle 
       contra el suelo (el programa se detiene).
-----> Queremos que caiga en una red de seguridad (catch) para que pueda 
       levantarse e intentarlo de nuevo.

1. La Estructura Básica
try {
    // 1. ZONA DE PRUEBA (El Trapecio)
    // Aquí pones el código que sospechas que podría fallar.
    // Si algo falla aquí, JS salta INMEDIATAMENTE al catch.
    
    noExisto(); // Esta función no existe, así que dará error.
    console.log("Esta línea NUNCA se imprimirá si falla la anterior");

} catch (error) {
    // 2. ZONA DE SEGURIDAD (La Red)
    // Aquí capturamos el fallo. El programa NO se detiene.
    // La variable 'error' contiene detalles de qué pasó.
    
    console.log("¡Ups! Hubo un fallo, pero el programa sigue vivo.");
    console.log("El error fue: " + error.message);
}

Las 4 Piezas Clave:
1. try (Intentar): Envuelve el código "peligroso".
2. catch (Capturar): Bloque que solo se ejecuta si hubo un error en el try. 
   Recibe un objeto (normalmente llamado error o e).
3. throw (Lanzar): Lo usamos en las Clases Abstractas. Sirve para provocar 
   un error manualmente cuando detectamos algo que no nos gusta (como un dato inválido).
4. finally (Finalmente): Un bloque opcional que se ejecuta SIEMPRE, 
   haya habido error o no. Sirve para limpieza (cerrar bases de datos, borrar variables 
   temporales, etc.).

El Objeto Error:
Cuando atrapas un error en el catch(error), ese objeto tiene propiedades útiles:
----> error.name: El tipo de error (ej: ReferenceError, SyntaxError).
----> error.message: La descripción del problema. 
**/

function dividir(a, b) {
    // 1. Validamos nosotros mismos con THROW
    if (b === 0) {
        throw new Error("⛔ No se puede dividir por cero.");
    }
    return a / b;
}

// 2. Probamos la función en un entorno seguro
try {
    console.log("Intentando dividir...");
    let resultado = dividir(10, 0); // Esto lanzará la "bomba"
    console.log("El resultado es: " + resultado); // Esta línea se salta

} catch (error) {
    // Aquí "desactivamos la bomba"
    console.log("Se ha producido un error: " + error.message);

} finally {
    // Esto sale pase lo que pase
    console.log("--- Operación finalizada ---");
}

console.log("El programa continúa felizmente.");

/*
🧠 Resumen
try: "Intenta hacer esto..."

catch: "...si fallas, haz esto otro en lugar de romperte."

throw: "¡Oye, esto está mal! Lanzo un error a propósito."

finally: "Pase lo que pase, haz esto al final."
**/