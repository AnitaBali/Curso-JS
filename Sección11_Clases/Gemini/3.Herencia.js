/*
1. Concepto: La Relación "Es un":
La herencia se basa en la jerarquía. Decimos que una Subclase (hija) 
hereda de una Superclase (padre) cuando la hija "es una" versión más específica del padre.
     - Un Coche es un Vehiculo.
     - Un Programador es un Empleado.
     - Un Perro es un Animal.
La idea es poner en el padre todo lo que sea común y en el hijo solo lo que sea específico.

2. La palabra clave extends: 
Es el puente. Se usa en la declaración de la clase para indicar el parentesco. 
class Coche extends Vehiculo { ... } 
Al hacer esto, Coche recibe automáticamente todos los métodos y propiedades de
Vehiculo sin que tengas que escribirlos de nuevo.

3. El método super(): El cable de conexión:
Este es el punto donde la mayoría se lía, pero es sencillo si lo piensas así: 
Cuando creas un Coche, JavaScript intenta crear un objeto. 
Pero como es hijo de Vehiculo, primero tiene que "construir" la parte de vehículo.
     - super() llama al constructor de la clase padre.
     - Regla de oro: No puedes usar this en una clase hija hasta que no hayas 
       llamado a super(). Primero nace el padre, luego el hijo.

4. Sobrescritura de Métodos (Method Overriding)
Un hijo puede tener un método con el mismo nombre que el padre pero que funcione diferente. 
Si el padre tiene moverse() y el hijo también, prevalecerá el del hijo cuando lo llames.
**/

// 1. LA SUPERCLASE (PADRE)
class Empleado {
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    // Un método que todos los empleados comparten
    presentarse() {
        return `Hola, soy ${this._nombre} y trabajo aquí.`;
    }
}

// 2. LA SUBCLASE (HIJA)
class Desarrollador extends Empleado {
    constructor(nombre, sueldo, lenguaje) {
        // ENLACE: Enviamos nombre y sueldo al constructor del padre
        super(nombre, sueldo); 
        
        // ESPECÍFICO: El lenguaje es algo que solo tiene el Desarrollador
        this._lenguaje = lenguaje;
    }

    // MÉTODO ESPECÍFICO: Solo el desarrollador puede programar
    programar() {
        return `${this._nombre} está creando código en ${this._lenguaje}.`;
    }
}

// 3. USO DEL SISTEMA
const dev = new Desarrollador("Brais", 3000, "JavaScript");

console.log(dev.presentarse()); // ✅ Heredado del padre
console.log(dev.programar());   // ✅ Propio del hijo