class Password {
    constructor(claveInicial) {
        // Al NO usar el guion bajo aquí, disparamos el método SET de abajo.
        // Esto garantiza que la contraseña se valide incluso al crear el objeto.
        this.clave = claveInicial; 
    }

    // EL "MOSTRADOR" (GETTER)
    // Se activa cuando haces: console.log(objeto.clave)
    get clave() {
        return "********"; 
    }

    // EL "GUARDIA DE SEGURIDAD" (SETTER)
    // Se activa cuando haces: objeto.clave = "algo" (o en el constructor)
    set clave(nuevaClave) {
        if (nuevaClave.length < 8) {
            console.log("❌ Error: '" + nuevaClave + "' es demasiado corta.");
        } else {
            // AQUÍ es el único lugar donde tocamos la CAJA FUERTE (_)
            this._clave = nuevaClave; 
            console.log("✅ Contraseña segura guardada.");
        }
    }
}

// --- PRUEBAS ---

console.log("--- Intento 1 (Clave corta) ---");
let paseMal = new Password("123"); 
// Resultado: Error, y 'this._clave' queda vacío (undefined).

console.log("\n--- Intento 2 (Clave correcta) ---");
let paseBien = new Password("miPasswordSegura"); 
// Resultado: Éxito.

console.log("\n--- Intento de leer la clave ---");
console.log(paseBien.clave); 
// Resultado: "********" (Gracias al GETTER, nadie ve la clave real).