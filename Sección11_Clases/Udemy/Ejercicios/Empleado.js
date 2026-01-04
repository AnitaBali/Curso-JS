class Empleado extends Persona{

    static contadorEmpleados=0;

    constructor(sueldo) {
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

