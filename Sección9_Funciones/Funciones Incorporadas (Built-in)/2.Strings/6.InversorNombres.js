function invertirNombre(nombre){
    let partes=nombre.split(" "); //Esto crea ["Juan","Perez"]
   //Le damos la vuelta a la lista
   partes.reverse();
   //Juntamos de nuevo con una coma y un espacio
   let resultado=partes.join(", ");
    
    return resultado;
}

let persona=invertirNombre("Juan Perez");
console.log(persona);