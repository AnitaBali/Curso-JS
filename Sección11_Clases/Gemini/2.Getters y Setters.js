/*
Imagina que en tu sistema de RRHH alguien hace esto: empleado1.sueldo = -500; 
¡Es un desastre! JavaScript te permite cambiar cualquier propiedad directamente, 
pero en programación profesional queremos proteger los datos.

1. ¿Qué es un Setter (set)?
Es un método que se comporta como una propiedad, pero que te permite validar antes de guardar.
Regla de oro: Se usa para escribir datos.

2. ¿Qué es un Getter (get)?
Es un método para leer datos. Se usa mucho cuando quieres devolver algo transformado o 
simplemente proteger la variable original.

3. El guion bajo _ (Convención)
Como el get y el set se suelen llamar igual que la propiedad (ej. sueldo), 
para no crear un bucle infinito, la propiedad real dentro del constructor se 
suele escribir con un guion bajo: this._sueldo. Esto le dice a otros programadores: 
"Oye, esta propiedad es privada, no la toques directamente, usa el get/set".


1. El problema: JavaScript no tiene "puertas cerradas"
En otros lenguajes (como Java o C#), puedes declarar una propiedad como private. 
Eso significa que nadie fuera de la clase puede tocarla. Si intentas hacerlo, 
el programa ni siquiera arranca.

Originalmente, JavaScript no tenía propiedades privadas. Todo era público. 
Si tenías un objeto cuentaBancaria, cualquiera podía hacer cuenta.dinero = 1000000 
y arruinar la lógica.

2. El Guion Bajo (_): El pacto de caballeros
Como no existía una forma real de prohibir el acceso, los programadores de JavaScript 
inventaron una convención: poner un guion bajo delante del nombre de la propiedad (ej: _sueldo).

---¿Qué significa técnicamente? Nada. Para el ordenador, _sueldo es una variable normal.

---¿Qué significa para los humanos? Es una señal de advertencia. Significa: 
"Esta propiedad es interna del objeto (está encapsulada). 
No la toques directamente desde fuera. Si quieres leerla o cambiarla, 
usa los métodos oficiales (getters y setters)".

3. El Encapsulamiento Real
Encapsular es "esconder la complejidad y proteger el estado".
Gracias a los getters y setters:
---Proteges el dato: El usuario de tu clase no sabe que existe _sueldo, él solo ve sueldo.
---Añades lógica: Puedes validar (set) o dar formato (get) sin que el usuario haga nada.

**/

class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this._sueldo = sueldo; // Usamos _ para indicar que es "privada"
    }

    // GETTER: Para leer el sueldo
    get sueldo() {
        return `${this._sueldo}€`;
    }

    // SETTER: Para cambiar el sueldo con seguridad
    set sueldo(nuevoSueldo) {
        if (nuevoSueldo < 0) {
            console.error("Error: El sueldo no puede ser negativo.");
        } else {
            this._sueldo = nuevoSueldo;
            console.log("Sueldo actualizado con éxito.");
        }
    }
}

const emp = new Empleado("Ana", 2000);

// ¡OJO! No se usan paréntesis al llamar a get/set
console.log(emp.sueldo); // "2000€" (Usa el get)

emp.sueldo = -100;       // Imprime error (Usa el set)
emp.sueldo = 2500;       // Lo actualiza correctamente