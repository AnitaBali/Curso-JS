class Empleado{

    constructor(nombre){
        this._nombre=nombre;
    }

    calcularPago(){
        return "0";
    }
}

class EmpleadoFijo extends Empleado{

    constructor(nombre,sueldoMensual) {
        super(nombre);
        this._sueldoMensual=sueldoMensual;
    }

    calcularPago(){
        return this._sueldoMensual;
    }
}

class EmpleadoPorHoras extends Empleado{

    constructor(nombre,horas,precioHora){
        super(nombre);
        this._horas=horas;
        this._precioHora=precioHora;
    }

    calcularPago(){
        return this._horas*this._precioHora;
    }
}

let lista=[
    new EmpleadoFijo("Ana", 5000),
    new EmpleadoPorHoras("Borja",40,20)
];

lista.forEach(function(empleado) {
    console.log(`Empleado ${empleado._nombre}: ${empleado.calcularPago()} euros.`);
});

