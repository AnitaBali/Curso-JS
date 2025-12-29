function Coche(marca,modelo){
    this.marca=marca;
    this.modelo=modelo;
}

Coche.prototype.detalles=function(){
    console.log(`Este es un ${this.marca} y modelo ${this.modelo}`);
};

let miCoche=new Coche("Audio", "Deportivo");
miCoche.detalles();
console.log(miCoche.hasOwnProperty("marca"));
console.log(miCoche.hasOwnProperty("detalles"));