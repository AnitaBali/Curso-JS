/*
🕒 ¿Qué es setTimeout?
Es una función asíncrona que permite ejecutar un bloque de código (una función) 
después de que haya transcurrido un tiempo determinado (un retraso).

Imagina que es un temporizador de cocina: tú le dices qué tiene que sonar y 
cuántos minutos esperar. Una vez lo programas, puedes seguir haciendo otras cosas 
hasta que el tiempo se agote.

1. Sintaxis (Cómo se escribe)
setTimeout(funcionAejecutar, milisegundos);

--- funcionAejecutar: Normalmente usamos una Arrow Function.
--- milisegundos: El tiempo de espera. Recuerda que 1000ms = 1 segundo.

2. ¿Cuándo se usa? (Casos prácticos)
---> Desaparecer mensajes: Cuando el usuario hace algo bien, sale un aviso de "Éxito" 
y quieres que se borre solo a los 5 segundos usando classList.remove().

---> Efectos visuales: Esperar un poco antes de que aparezca un menú o una ventana emergente (pop-up).

---> Simular carga: En el ejercicio del botón "Loading" que planeamos, podrías usarlo 
para que el botón vuelva a su estado normal después de 2 segundos.

3. Concepto Clave: El comportamiento No Bloqueante
JavaScript no se detiene a esperar.

4. ¿Cómo se cancela?
A veces programas un setTimeout, pero algo ocurre y ya no quieres que se ejecute. 
Para eso existe clearTimeout.

Para usarlo, primero debes guardar tu temporizador en una variable (que suele ser const):
const miTemporizador = setTimeout(() => {
    console.log("Esto no llegará a salir");
}, 5000);

// Si pasa algo y quieres cancelarlo:
clearTimeout(miTemporizador);

*/

console.log("Paso 1");

setTimeout(() => {
    console.log("Paso 2 (en el futuro)");
}, 2000);

console.log("Paso 3");

/*
El orden en la consola será:

Paso 1

Paso 3

(espera 2 segundos) ... Paso 2 (en el futuro)

JavaScript "dispara" el cronómetro y sigue leyendo el resto del código inmediatamente.

*/
