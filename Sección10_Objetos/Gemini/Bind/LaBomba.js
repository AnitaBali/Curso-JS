let bomba={
    tiempo:10
};

function cuentaAtras(){
    this.tiempo-=2;
    if (this.tiempo<=0){
        return "Bomba detonada!";
    } else{
        return `Detonación en: ${this.tiempo}`;
    }
}

let activarBomba=cuentaAtras.bind(bomba);
console.log(activarBomba());
console.log(activarBomba());
console.log(activarBomba());
console.log(activarBomba());
console.log(activarBomba());
console.log(activarBomba());
console.log(activarBomba());

