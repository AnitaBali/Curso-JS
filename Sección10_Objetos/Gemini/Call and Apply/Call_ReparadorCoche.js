let miCoche={
    marca:"Toyota",
    averia:"motor"
}

function arreglar(mecanico,coste){
    return `El mecánico ${mecanico} ha reparado ${this.averia} de mi ${this.marca} por ${coste} euros`;
};

console.log(arreglar.call(miCoche,"Pepe",300));