/*
📘 Teoría Desarrollada: La Clase y el Constructor
1. ¿Qué es realmente una Clase?
En JavaScript, una clase es un molde o una plantilla. Antes usábamos 
funciones constructoras, pero la clase organiza mejor el código. 
Aunque parezca algo nuevo, por debajo sigue usando prototipos, pero 
con una sintaxis mucho más limpia.

2. La palabra clave class
Define el bloque donde vivirá todo nuestro objeto. A diferencia de los 
objetos literales, aquí no se usan comas para separar los métodos.

3. El Método constructor
Es el método más importante.
---> Se ejecuta una sola vez: justo en el momento en que haces new Clase().
--->Sirve para inicializar las propiedades del objeto.
--->Si no lo escribes, JavaScript añade uno vacío por defecto, pero en el 
    99% de los casos lo necesitarás para recibir datos.

4. Métodos de Instancia
Son las "acciones" que los objetos pueden realizar. Se escriben directamente 
dentro de la clase, sin la palabra function. Todos los objetos creados con 
esa clase compartirán estos métodos (ahorrando memoria).
**/

class Departamento{
    constructor(nombre,empleados){
        this.nombre=nombre;
        this.empleados=empleados;
    }

    resumen(){
        return `${this.nombre}: ${this.empleados}`;
    }
}

let departamento1=new Departamento("Ventas",10);
console.log(departamento1.resumen());
