"use strict"

//x=10;
//console.log(x);

let x=10;
console.log(x);

function miFuncion(){
    "use strict"
    let y=15;
    console.log(y);
}

miFuncion();

/*
Excelente momento para preguntar esto! Justo ahora que vas a empezar a trabajar con 
el navegador y el DOM, es vital entender qué es el Modo Estricto.

Digamos que JavaScript, en sus inicios, era un lenguaje muy "permisivo". 
Si cometías un error tonto, JS intentaba arreglarlo por ti sin avisar. 
Eso, que parece bueno, en realidad creaba "bugs" silenciosos horribles.

Para solucionar esto, en 2009 nació "use strict".

👮‍♂️ ¿Qué es "use strict"?
Es una instrucción que le dice al navegador: "Oye, no me dejes pasar ni una. 
Si cometo un error de sintaxis o malas prácticas, lánzame un error y detén el programa".

Es como pasar de escribir en un bloc de notas (donde puedes escribir "ola k ase") 
a escribir en un editor profesional con corrector ortográfico activado.

🛠️ ¿Cómo se activa?
Simplemente poniendo esta línea de texto al principio de todo tu archivo .js 
(o al principio de una función):

"use strict";

// Tu código aquí...

🚫 Las 4 cosas principales que prohíbe
Si activas el modo estricto, JavaScript te prohibirá hacer estas "chapuzas" que antes permitía:

1. Usar variables sin declarar
En el modo "chapucero" (Sloppy Mode), si olvidas poner let, const o var, 
JS crea la variable global por ti. ¡Un desastre!

// Modo normal (Sloppy)
mensaje = "Hola"; // JS crea una variable global automáticamente. 🤢

// Modo Estricto
"use strict";
mensaje = "Hola"; // 💥 ReferenceError: mensaje is not defined

2. Palabras reservadas futuras
No te deja usar nombres de variables que JS podría usar en el futuro, como public, 
private, implements, interface.

"use strict";
let public = 10; // 💥 Error: Unexpected strict mode reserved word

3. Parámetros duplicados
No permite que una función tenga dos parámetros con el mismo nombre 
(algo que no tiene sentido lógico pero que JS permitía).

"use strict";
function sumar(a, a) { // 💥 SyntaxError: Duplicate parameter name
    return a + a;
}

4. Protege el this global
En modo normal, si usas this fuera de un objeto, te devuelve el 
objeto gigante window. En modo estricto, devuelve undefined. Esto es por seguridad, 
para que no modifiques el navegador por error.


🕵️ El Dato Curioso: ¡Ya lo has estado usando!
Aquí viene el giro de guion: Las CLASES en JavaScript activan el "use strict" automáticamente.

Todo el código que has escrito dentro de class Animal { ... } o class Envio { ... } ya se estaba 
ejecutando en modo estricto sin que tú lo supieras. Por eso, si intentabas usar una variable 
sin let dentro de un método de clase, te daba error.

📝 Resumen
¿Qué es? Un modo que convierte errores silenciosos en errores ruidosos (throws).

¿Para qué sirve? Para escribir código más limpio, seguro y profesional.

¿Debo usarlo? SIEMPRE. A partir de ahora, acostúmbrate a poner "use strict"; 
en la primera línea de tus archivos .js (a menos que uses Clases o Módulos, donde ya va incluido).
**/