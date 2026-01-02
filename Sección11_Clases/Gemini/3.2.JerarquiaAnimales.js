class Animal{

    constructor(nombre){
        this.nombre=nombre;
    }

    set nombre(valor){
        if(valor===""){
            this._nombre="Animal misterioso";
        }else{
            this._nombre=valor;
        }
    }

    get nombre(){
        return `Nombre Animal -------> "${this._nombre}"`;
    }

    emitirSonido(){
        return "Este animal hace un sonido genérico";
    }
}

class Perro extends Animal{

    constructor(nombre,raza){

        super(nombre);
        this.raza=raza;
    }

    emitirSonido(){
        return `El perro ${this._nombre} dice: GUAUUU!`;
    }
}

let mascota1=new Animal("");
console.log(mascota1.nombre);
console.log(mascota1.emitirSonido());

let miPerro=new Perro("Teddy","Bichón Maltes");
console.log(miPerro.nombre);
console.log(miPerro.emitirSonido());