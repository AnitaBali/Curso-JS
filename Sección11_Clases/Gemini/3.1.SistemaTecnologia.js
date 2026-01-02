class Dispositivo{

    constructor(marca){
        this.marca=marca;
    }

    set marca(valor){
        if(valor===""){
            this._marca="Genérico";
        }else{
            this._marca=valor;
        }
    }

    get marca(){
        return `La marca es: ${this._marca.toUpperCase()}`;
    }

    encender(){
        return `Dispositivo ${this._marca} encendido.`;
    }
}

class Smartphone extends Dispositivo{

    constructor(marca, modelo){
        super(marca);
        this.modelo=modelo;
    }

    set modelo(valor){
        if(valor.length<=2){
            this._modelo="Desconocido";
        }else{
            this._modelo=valor;
        }
    }

    get modelo(){
        return this._modelo;
    }

    llamar(){
        return `Llamando desde un ${this._marca} ${this._modelo}...`;
    }
}

let movil1=new Smartphone("Apple", "Iphone 15");
let movil2=new Smartphone("", "Ip");

console.log(movil1.encender());
console.log(movil1.llamar());
console.log(movil1.marca);


console.log(movil2.encender());
console.log(movil2.llamar());
console.log(movil2.marca);