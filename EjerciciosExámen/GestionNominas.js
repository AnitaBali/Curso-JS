class Empleado{

    static presupuestoTotal=0;

    constructor(nombre){
        if(new.target===Empleado){
            throw new Error("Error: no puedes crear un objeto abstracto. ");
        }
        this._nombre=nombre;
    }

    calcularSueldo(){
        throw new Error("Error: debe implementase el método. ");
    }

    static sumarAlPresupuesto(cantidad){
        Empleado.presupuestoTotal+=cantidad;
    }

}

class EmpleadoFijo extends Empleado{

    constructor(nombre,sueldoMensual){
        super(nombre);
        this._sueldoMensual=sueldoMensual;
    }

    calcularSueldo(){
        Empleado.sumarAlPresupuesto(this._sueldoMensual);
        return this._sueldoMensual;
    }
}

class EmpleadoHoras extends Empleado{

    constructor(nombre,precioHora,horasTrabajadas){
        super(nombre);
        this._precioHora=precioHora;
        this._horasTrabajadas=horasTrabajadas;
    }

    calcularSueldo(){
        let resultado=this._precioHora*this._horasTrabajadas;
        Empleado.sumarAlPresupuesto(resultado);
        return resultado;
    }
}

let miLista=[
    new EmpleadoFijo("Ana",2000),
    new EmpleadoHoras("Luis",15,100),
    new EmpleadoFijo("Carlos",1500)
];

miLista.forEach(function(empleado){
    console.log("El empleado " + empleado._nombre + " cobra " + empleado.calcularSueldo());
});

console.log("Gasto total: " + Empleado.presupuestoTotal);

