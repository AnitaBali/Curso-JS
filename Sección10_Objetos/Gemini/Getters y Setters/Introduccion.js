/*
Hasta ahora, para obtener el nombre capitalizado de tu mascota, 
tenías que llamar a una función con paréntesis: mascota.saludar().

Los Getters y Setters son palabras clave (get y set) que se ponen 
delante de una función para que JavaScript la trate como si fuera una propiedad y no un método.

1. El Getter (get)
Sirve para leer una propiedad. Lo bueno es que no usas paréntesis al llamarlo.

2. El Setter (set)
Sirve para escribir o modificar una propiedad, permitiéndote añadir reglas 
(como que el nombre no sea un número).
---Usa la palabra set.
---Obligatoriamente debe recibir un parámetro (el valor que el usuario intenta guardar).
---No se "llama" como una función, se usa con el signo igual =.

¿Por qué se usan?
---Limpieza: El código que usa el objeto se ve más sencillo (sin tantos paréntesis).
---Seguridad: Puedes poner filtros antes de guardar un dato (como hicimos en el set).
---Cálculos al vuelo: Como en el get, puedes devolver un dato procesado 
   pero que parezca una propiedad normal.

**/


//GET
let persona = {
    nombre: "ana",
    apellido: "garcia",

    // Usamos 'get' delante
    get nombreCompleto() {
        let n = this.nombre[0].toUpperCase() + this.nombre.slice(1);
        let a = this.apellido[0].toUpperCase() + this.apellido.slice(1);
        return n + " " + a;
    }
};

// ¡Fíjate! No uso paréntesis ()
console.log(persona.nombreCompleto); // "Ana Garcia"

//SET
let usuario = {
    nombre: "",

    set nuevoNombre(valor) {
        if (valor.length < 3) {
            console.log("Error: El nombre es muy corto.");
        } else {
            this.nombre = valor;
        }
    }
};

usuario.nuevoNombre = "Al"; // Imprime el error
usuario.nuevoNombre = "Alberto"; // Se guarda correctamente
