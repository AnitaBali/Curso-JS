class Persona{

    constructor(nombre,edad) {
        this._nombre=nombre;
        this.edad=edad;
    }

    set edad(valor){
        if(valor<0){
            this._edad=0;
        } else if(valor>120){
            this._edad=120;
        } else{
            this._edad=valor;
        }
    }

    get edad(){
        return this._edad;
    }

    ficha(){
        return `Nombre: ${this._nombre} | Edad: ${this.edad} años`;
    }
}

class Paciente extends Persona{

    constructor(nombre,edad,historial){
        super(nombre,edad);
        this._historial=historial;
    }

    verPaciente(){
        return super.ficha() + " |Historial: " + this._historial;
    }
}

let paciente1= new Paciente("Fatima", 34, "Gripe y Gastro");
console.log(paciente1.verPaciente());
