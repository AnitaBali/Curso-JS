class Persona{

    constructor(nombre,apellido,edad){
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre=nuevoNombre;
    }
}

let persona1=new Persona("Ana","Garcia",35);
let persona2=new Persona("Borja","Miranda",37);
console.table(persona1);
console.table(persona2);
console.log(persona1._nombre);
persona2.nombre="Coco";
console.table(persona2);
