class Paquete{

    constructor(pesoInicial){
        this.peso=pesoInicial;
    }

    set peso(valor){
        if (valor<=0){
            console.log("Error: El peso debe ser mayor a cero.");
            this._peso=1;
        } else{
            this._peso=valor;
        }
    }

    get peso(){
        return `El peso es de ${this._peso} kg.`
    }

}

let paquete1=new Paquete(10);
let paquete2=new Paquete(0);
let paquete3=new Paquete(-5);

console.log(paquete1.peso);
console.log(paquete2.peso);
console.log(paquete3.peso);