let perro={
    nombre: "Fido"
}

function ladrar(){
    console.log("Guau! Me llamo " + this.nombre);
};

ladrar.call(perro);


