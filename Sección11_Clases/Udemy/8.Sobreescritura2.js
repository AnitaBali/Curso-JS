class Empleado{

    constructor(nombre,sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre} | Sueldo: ${this.sueldo}`;
    }

}

class Gerente extends Empleado{

    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this.departamento=departamento;
    }

    obtenerDetalles(){
        return `Gerente: nombre: ${this.nombre} | Departamento: ${this.departamento} |Sueldo: ${this.sueldo} `;
    }
    
}

let empleado1=new Empleado("Ana",5000);
let gerente1=new Gerente("Borja",6000,"Ventas");
console.log(empleado1.obtenerDetalles());
console.log(gerente1.obtenerDetalles());
