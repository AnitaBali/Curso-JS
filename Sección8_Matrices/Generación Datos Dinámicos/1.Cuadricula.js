//Crea una matriz de 5 filas y 5 columnas llena de asteriscos "*" usando bucles.

//Creas la "caja grande" vacía. De momento no es una matriz, es solo un array 
//simple donde guardaremos las filas más tarde.
let tablero=[];

//Línea 2: Empieza el bucle de las filas. El ordenador dice: 
//"Voy a repetir lo que hay aquí dentro 5 veces". Cada repetición fabricará una fila completa.
for(let f=0;f<5;f++){
    //Línea 3: ¡Esta es la clave! Justo al empezar cada fila, creas una "caja pequeña" 
    //vacía. Es un array temporal que solo servirá para guardar los 5 asteriscos de esta fila actual.
    let fila=[];

    //Línea 4 y 5: Este es el bucle de las columnas. Se ejecuta 5 veces seguidas.
    //En cada vuelta, mete un asterisco "*" dentro de la caja pequeña fila.
    for(let c=0;c<5;c++){
        fila.push("*");
    }

    //Línea 7: Ahora que la fila está llena, la metemos dentro de la caja grande tablero.
    //Línea 8: El bucle de las filas (f) vuelve arriba, borra la variable fila 
    //y empieza a fabricar la siguiente fila de asteriscos.
    tablero.push(fila);
} 

console.table(tablero);