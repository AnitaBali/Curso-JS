/*
Si setTimeout es un temporizador de cocina que suena una sola vez, setInterval es 
como una alarma de despertador que suena cada mañana: se repite y se repite en bucle 
hasta que tú le digas que pare.


🔁 ¿Qué es setInterval?
Es una función que ejecuta un bloque de código repetidamente cada vez que transcurre 
un intervalo de tiempo fijo.

1. Sintaxis
Es idéntica a la de setTimeout:
setInterval(funcionAejecutar, milisegundos);

-- funcionAejecutar: Lo que quieres que pase.
-- milisegundos: Cada cuánto tiempo quieres que se repita (1000ms = 1 segundo).

2. Diferencia clave con setTimeout
Es la duda típica de examen:

setTimeout: Ejecuta el código una sola vez tras la espera.

setInterval: Ejecuta el código infinitas veces, esperando el intervalo entre cada ejecución.

3. ¿Cómo se detiene? (clearInterval)
Esta es la parte más importante. Si no detienes un setInterval, se quedará funcionando para 
siempre, gastando memoria y batería.

Para pararlo, necesitas:

- Guardarlo en una variable.
- Usar clearInterval().

let reloj =() =>{
    let fecha = new Date();
    console.log(`Hora actual: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}
setInterval(reloj, 2000); // Muestra la hora cada 2 segundos

//
setInterval(() => {
    console.log("Ha pasado otro segundo...");
}, 1000);

4. Usos más comunes
Relojes digitales: Actualizar la hora en pantalla cada segundo.
Cronómetros: Ir sumando tiempo en una interfaz.
Carruseles de imágenes: Cambiar la foto de un banner automáticamente cada 3 o 5 segundos.
Verificación de datos: Consultar al servidor cada minuto si hay mensajes nuevos.

⚠️ Un detalle importante (Asincronía)
Al igual que setTimeout, setInterval no detiene el resto de tu código. 
JavaScript lo pone a funcionar en "segundo plano" y sigue con las líneas de abajo.

Ejemplo de un contador que para al llegar a 5:

¨*/


let contador = 0;

const miReloj = setInterval(() => {
    contador++;
    console.log("Segundos: " + contador);

    if (contador === 5) {
        clearInterval(miReloj); // ¡Aquí se detiene el bucle!
        console.log("¡Tiempo cumplido!");
    }
}, 1000);