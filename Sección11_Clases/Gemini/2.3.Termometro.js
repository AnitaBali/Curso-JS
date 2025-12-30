class Termometro{

    constructor(grados){
        this.celsius=grados;
    }

    get celsius(){
        return `Valor: ${this._celsius} °C`
    }

    set celsius(grados){
        if(grados<-273.15){
            console.log(`Error: Escala fuera de límites físicos.`);
            this._celsius=-273.15;
        }else{
            this._celsius=grados;
        }
    }
}

let temperatura1=new Termometro(-500);
let temperatura2=new Termometro(270);
let temperatura3=new Termometro(-10);

console.log(temperatura1.celsius);
console.log(temperatura2.celsius);
console.log(temperatura3.celsius);
