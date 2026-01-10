//Este es el caso más real de todos. Cuando trabajes con APIs (datos que vienen de internet), 
// usarás JSON.parse() para leerlos. 
// Pero si el dato llega mal (falta una coma, una comilla...), el programa explota.

let jsonMalo = '{"nombre": "Pepe", "edad": 30';
let jsonBueno = '{"nombre": "Pepe", "edad": 30}';

try{
    let usuario=JSON.parse(jsonMalo);
    console.log(usuario); //Esta línea no debería llegar a ejecutarse
} catch(error){
    console.log("Error crítico: el JSON no es válido.");
}