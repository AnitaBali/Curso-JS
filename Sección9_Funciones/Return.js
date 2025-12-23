/*
El return (Devolver el resultado).
Hasta ahora, tus funciones son como "impresoras": hacen el trabajo y 
lo muestran en la pantalla (console.table). Pero un Senior prefiere 
que las funciones sean como "cocineros": preparan el plato y te lo 
entregan para que tú decidas qué hacer con él.

Para eso usamos la palabra clave return.
¿Por qué usar return?
Si tu función usa console.table, el resultado muere en la consola. 
Si usas return, puedes guardar ese tablero en una variable para usarlo 
más tarde en el juego (por ejemplo, para mover un personaje dentro).

function sumar(a, b) {
    return a + b; // La función "escupe" el resultado
}

let resultado = sumar(5, 3); // Guardamos lo que la función nos devolvió
console.log(resultado); // Ahora vale 8
**/

//La Fábrica de Mapas Aleatorios

function crearMapa(filas,columnas){
    let mapa=[];
    for(let f=0;f<filas;f++){
        let fila=[];
        for(let c=0;c<columnas;c++){
            let aleatorio=Math.random().toFixed(2);
            if(aleatorio>0.70){
                fila.push("MINA");
            }else{
                fila.push("PASTO");
            }
        }
        mapa.push(fila);
    }
    return mapa;
}

let miPrimerMapa = crearMapa(3, 3); 
let miSegundoMapa = crearMapa(5, 2); 

console.table(miPrimerMapa); 
console.table(miSegundoMapa); 
