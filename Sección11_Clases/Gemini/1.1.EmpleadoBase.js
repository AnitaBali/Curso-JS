class Empleado{

    constructor(nombre,sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo;
    }

    mostrarSueldo(){
        return `Empleado: ${this.nombre}, Sueldo: ${this.sueldo} euros.`
    }
}

let empleado1=new Empleado("Anita", 30000);
console.log(empleado1.mostrarSueldo());