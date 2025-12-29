let usuario={
    nombre:"Marcos"
};

function viajar(destino,dias){
    return `${this.nombre} se va a ${destino} durante ${dias} días.`;
};

console.log(viajar.apply(usuario, ["Bali",15]));