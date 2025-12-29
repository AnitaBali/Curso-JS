

class Persona{

    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
       
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido=apellido;
    }

     nombreCompleto(){
        return this.nombre+ " "+ this.apellido;
    }
    //Sobreescribiendo el metodo de la clase padre
    toString(){
        //Se aplica polimorfismo en esta llamada (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
    }
};

class Empleado extends Persona{

    constructor(nombre, apellido, departamento){
        super(nombre,apellido); //llamar al constructos de la clase padre
        this._departamento=departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento=departamento;
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ", "+ this.departamento;
    }

};

let persona1=new Persona("Ana","Garcia");
console.log(persona1.toString());

let empleado1=new Empleado("Fatima","Garcia","Coronaria");
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
