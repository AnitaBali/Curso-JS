class Identificador {
    // EL CONSTRUCTOR: Es el que recibe el paquete de fuera
    // "entrada" es el nombre del argumento (lo que tú escribes al hacer new)
    constructor(entrada) {
        // Enlazamos: Le pasamos "entrada" al SETTER (this.id)
        this.id = entrada; 
    }

    // EL SETTER: Es el filtro de seguridad (Aduana)
    // Se llama "id". Recibe el valor y decide dónde guardarlo.
    set id(valor) {
        if (valor.length === 5) {
            // Si es correcto, lo guarda en el ATRIBUTO INTERNO (_codigo)
            this._codigo = valor;
        } else {
            console.log("Error: Longitud de ID incorrecta");
            // Si falla, guarda un texto de error en el ATRIBUTO INTERNO
            this._codigo = "ERROR";
        }
    }

    // EL GETTER: Es el que muestra el dato (Mostrador)
    // Se llama "id". Cuando lo pides, va al ATRIBUTO INTERNO y lo saca.
    get id() {
        // Devuelve lo que hay en el almacén transformado
        return this._codigo.toUpperCase();
    }
}

// --- ASÍ SE ENLAZA TODO AL USARLO ---

// 1. "abcde" entra como ARGUMENTO al constructor
// 2. El constructor se lo pasa al SETTER 'id'
// 3. El SETTER ve que mide 5 y lo guarda en el ATRIBUTO INTERNO '_codigo'
let usuarioCorrecto = new Identificador("abcde");

// 4. Al hacer .id, el GETTER va al ATRIBUTO INTERNO, lo pone en mayúsculas y lo suelta
console.log(usuarioCorrecto.id); // Resultado: ABCDE