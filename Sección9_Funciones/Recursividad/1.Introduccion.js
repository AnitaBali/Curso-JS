/*
El concepto de la "Matrioshka" (Muñeca Rusa)
Imagina que tienes una muñeca rusa grande. 
Para llegar al regalo que hay dentro de la más pequeña, 
tienes que abrir la grande, luego la mediana, luego la pequeña... 
El proceso de "abrir muñeca" es el mismo siempre, pero la muñeca 
es cada vez más pequeña hasta que llegas a la última. 
Eso es la recursividad.

Los 2 Pilares de una función recursiva
Para que una función no se quede llamándose a sí misma para siempre 
(y bloquee tu ordenador), necesita obligatoriamente dos partes:

- El Caso Base (El Freno): Es la condición que detiene las llamadas. 
Es el "suelo" de la escalera. Si llegamos aquí, la función deja de 
llamarse y empieza a devolver los resultados hacia arriba.

- El Caso Recursivo (El Salto): Es la parte donde la función se vuelve a 
llamar a sí misma, pero con un dato más pequeño o más cercano al caso base.
**/

function cuentaAtras(n) {
    // 1. Caso Base: Si n es 0, paramos
    if (n === 0) {
        console.log("¡Despegue! 🚀");
        return; 
    }

    // 2. Acción: Imprimimos el número actual
    console.log(n);

    // 3. Caso Recursivo: Llamamos a la función con n - 1
    // (Esto hace que n se acerque al Caso Base 0)
    cuentaAtras(n - 1);
}

cuentaAtras(3);