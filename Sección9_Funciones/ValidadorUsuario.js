function esNombreValido (nombre){
    return nombre.length>8;
}

let nombre=esNombreValido("Ana");
let nombre2=esNombreValido("Ana Maria");
console.log(nombre);
console.log(nombre2);