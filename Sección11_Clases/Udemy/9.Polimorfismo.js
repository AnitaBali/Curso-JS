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

 function imprimir(tipo){
        console.log(tipo.obtenerDetalles());
        if(tipo instanceof Gerente){  //Poner primero la clase de menor jerarquía
            console.log("Es un objeto de tipo Gerente");
        } else if(tipo instanceof Empleado){
            console.log("Es un objeto de tipo Empleado");
        } else if(tipo instanceof Object){
             console.log("Es un objeto de tipo Object");
        }



}

let empleado1=new Empleado("Ana",5000);
let gerente1=new Gerente("Borja",6000,"Ventas");
imprimir(empleado1);
imprimir(gerente1);
