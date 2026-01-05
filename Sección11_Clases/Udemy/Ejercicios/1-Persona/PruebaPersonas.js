class Persona{

    static contadorPersonas=0;

    constructor(nombre, apellido,edad){

        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
        this._idPersona=++Persona.contadorPersonas;
        
    }

    
    set nombre(valor){
        this._nombre=valor;
    }

    get nombre(){
        return this._nombre;
    }

    set apellido(valor){
        this._apellido=valor;
    }

    get apellido(){
        return this._apellido;
    }

    set edad(valor){
        this._edad=valor;
    }

    get edad(){
        return this._edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    toString(){
        return `${this._idPersona} | ${this._nombre} | ${this._apellido} | ${this._edad} `;
    }
    
}

class Empleado extends Persona{

    static contadorEmpleados=0;

    constructor(nombre,apellido,edad,sueldo) {
        super(nombre,apellido,edad);
        this._sueldo=sueldo;
        this._idEmpleado=++ Empleado.contadorEmpleados;
    }

    set sueldo(valor){
        this._sueldo=valor;
    }

    get sueldo(){
        return this._sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    toString(){
        return super.toString() + `| ${this._idEmpleado} | ${this._sueldo}`;
    }

}

class Cliente extends Persona{

    static contadorClientes=0;

    constructor(nombre,apellido,edad,fechaRegistro) {
        super(nombre,apellido,edad);
        this._fechaRegistro=fechaRegistro;
        this._idCliente=++ Cliente.contadorClientes;
    }

    set fechaRegistro(valor){
        this._fechaRegistro=valor;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    toString(){
        return super.toString() + `| ${this._idCliente} | ${this._fechaRegistro}`;
    }

}


//Prueba clase Persona
let persona1=new Persona("Ana","Garcia",35);
let persona2=new Persona("Borja","Miranda",37);
console.log(persona1.toString());
console.log(persona2.toString());
console.log(Persona.contadorPersonas);


//Prueba clase Empleado
let empleado1=new Empleado("Ana","Garcia",35,5000);
let empleado2=new Empleado("Fatima","Garcia",34,3000);
console.log(empleado1.toString());
console.log(empleado2.toString());
console.log(Empleado.contadorEmpleados);

//Prueba clase Cliente
let cliente1=new Cliente("Coco","Dolindo",5,new Date());
let cliente2=new Cliente("Dolly","Hermosa",4,new Date());
console.log(cliente1.toString());
console.log(cliente2.toString());
console.log(Cliente.contadorClientes);