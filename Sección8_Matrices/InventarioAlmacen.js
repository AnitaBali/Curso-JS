let estantes = [
    ["Cajas", "Libros", "Cajas"],
    ["Ropa", "Cajas", "Libros"],
    ["Ropa", "Ropa", "Ropa"]
];

let contador=0;

for(let fila=0;fila<estantes.length;fila++){
    for(let columna=0;columna<estantes[fila].length;columna++){
        if(estantes[fila][columna]==="Cajas"){
            contador++;
        }
    }
}

console.log(`Hay un total de ${contador} cajas en el almacén.`)