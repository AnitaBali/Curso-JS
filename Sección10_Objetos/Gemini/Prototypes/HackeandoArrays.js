Array.prototype.presentarse=function(){
    return `Hola soy una lista y tengo ${this.length} elementos.`
}

let frutas=["pera","manzana"];
let numeros=[1,2,3,4,5];

console.log(frutas.presentarse());
console.log(numeros.presentarse());