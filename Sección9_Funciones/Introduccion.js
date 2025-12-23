/*
1. La Filosofía de las Funciones: "No te repitas" (DRY)
En programación existe un principio llamado DRY (Don't Repeat Yourself). 
Si escribes el mismo for dos veces, estás trabajando de más.

Una Función es un bloque de código que guardas con un nombre para usarlo cuando quieras.

Ejemplo básico (La declaración):

function saludarJugador() {
    console.log("************************");
    console.log("¡BIENVENIDA AL JUEGO!");
    console.log("************************");
}

// Así se usa (se llama):
saludarJugador();

2. El Salto a Senior: Parámetros y Argumentos
Aquí es donde se pone interesante. Las funciones pueden recibir "ingredientes" para trabajar. 
Ayer tus matrices eran siempre de 4x4. Con funciones, las haremos flexibles.

Imagina que los paréntesis son la "puerta de entrada" de datos:

function crearMuro(largo) { // 'largo' es el parámetro (el hueco)
    let muro = "";
    for(let i = 0; i < largo; i++) {
        muro += "#";
    }
    console.log(muro);
}

crearMuro(5);  // Imprime: #####
crearMuro(10); // Imprime: ##########


**/

//Tu primer reto de hoy: "La Máquina de Tableros"

function generarCuadricula(tamaño){
    let cuadro=[];
    for(let f=0; f<tamaño;f++){
        let fila=[];
        for(let c=0; c<tamaño;c++){
            fila.push("*");
        }
        cuadro.push(fila);
    }
    console.table(cuadro);
}

generarCuadricula(5);
generarCuadricula(6);