/*
👻 ¿Qué es una Clase Abstracta?
Imagina el concepto "Animal". Si yo te digo "dibújame un animal", 
tú me preguntarás: "¿Pero cuál? ¿Un perro? ¿Un gato? ¿Un pez?". 
No puedes dibujar un "animal" genérico que no sea ninguna especie concreta.

En programación, una Clase Abstracta es un molde que sirve de base para otros, 
pero que está prohibido usar para crear objetos directamente.

❌ new Animal() -> ERROR (Es demasiado abstracto).

✅ new Perro() -> CORRECTO (Es concreto).


🛠️ El Truco en JavaScript (new.target)
Otros lenguajes tienen una palabra clave abstract, pero en JS lo simulamos 
con un pequeño truco en el constructor usando new.target.

class Animal {
    constructor(nombre) {
        // TRUCO: Si intentan hacer "new Animal", lanzamos un error
        if (new.target === Animal) {
            throw new Error("No puedes instanciar la clase abstracta Animal directamente.");
        }
        this.nombre = nombre;
    }

    // Método que OBLIGAMOS a que las hijas tengan
    hacerSonido() {
        console.log("Este animal hace un sonido genérico.");
    }
}

class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    
    // El perro tiene su propio sonido
    hacerSonido() {
        console.log("¡Guau!");
    }
}

// PRUEBAS:
// let a = new Animal("Fantasma"); // ❌ ESTO DARÁ ERROR Y PARARÁ EL PROGRAMA
let p = new Perro("Bobby");     // ✅ ESTO FUNCIONA
p.hacerSonido();

🧠 ¿Por qué hacemos esto?
Para obligar a la organización. Si estás creando un videojuego, no quieres que por 
error alguien cree un enemigo que sea solo "Enemigo" sin saber si dispara, 
muerde o vuela. Quieres forzar a que sea un "Orco" o un "Dragón".


Las Clases Abstractas son un concepto de arquitectura de software, 
y entender el porqué existen es más importante que saber escribirlas.
Aquí tienes la teoría desglosada paso a paso.

1. ¿Qué es realmente una Clase Abstracta?
Piensa en una clase abstracta como un concepto o una categoría, no como un objeto real.
Ejemplo Real: "Mueble".

---> Tú puedes comprar una "Silla" (Objeto real).
---> Tú puedes comprar una "Mesa" (Objeto real).

Pero tú no puedes ir a IKEA y decir "Quiero comprar un Mueble". 
El vendedor te dirá: "Ya, ¿pero qué mueble? ¿Silla, mesa, sofá?".

En programación, la clase Mueble sería abstracta. 
Sirve para agrupar características comunes (material, precio, color) 
que heredarán la Silla y la Mesa, pero jamás deberías poder crear un objeto que sea solo Mueble.

2. La Herramienta Secreta: new.target
JavaScript es un lenguaje muy flexible y por defecto te deja hacer new de 
cualquier clase. Para simular las clases abstractas, usamos una propiedad 
especial llamada new.target.

¿Qué hace new.target? Es un chivato. Nos dice exactamente qué constructor se 
ha llamado al hacer el new.

Imagina que tenemos la clase Padre y la clase Hijo.
     - Si escribes new Padre() -> new.target vale Padre.
     - Si escribes new Hijo() -> new.target vale Hijo (aunque Hijo llame a super(), 
       el target sigue siendo Hijo).

La Lógica del "Candado": Dentro del constructor del padre ponemos una condición:

     - "Si el new.target soy YO MISMO (la clase padre), lanza un error y detén todo, 
        porque nadie debería instanciarme directamente."


3. El Segundo Nivel: Métodos Abstractos
A veces, la clase padre no solo quiere prohibir su creación, 
sino que quiere obligar a sus hijos a hacer algo, aunque el padre no sepa cómo.

- Ejemplo: Clase Animal.
- Método: comer().
- El Animal sabe que todos comen, pero no sabe cómo. El león caza, la vaca pasta.
- Entonces, en la clase abstracta Animal, creamos el método comer() pero hacemos 
  que lance un error: "Error: Debes implementar este método en la hija".

Esto obliga al programador que cree la clase Leon a sobrescribir comer(). 
Si se le olvida, el programa fallará. Es una forma de asegurar que el código es robusto.

**/

class Empleado {
    constructor(nombre) {
        // 1. EL CANDADO: Evita que existan "Empleados" genéricos
        if (new.target === Empleado) {
            throw new Error("¡Alto! No puedes crear un Empleado genérico. Define si es Gerente o Obrero.");
        }
        this.nombre = nombre;
    }

    // 2. EL CONTRATO: Obliga a los hijos a definir qué hacen
    trabajar() {
        throw new Error("La clase hija debe implementar el método 'trabajar'");
    }
}

class Programador extends Empleado {
    constructor(nombre) {
        super(nombre);
    }

    // Al escribir esto, cumplimos el contrato del padre
    trabajar() {
        console.log(this.nombre + " está escribiendo código.");
    }
}

// --- ESCENARIOS ---

// A. Intento crear la clase abstracta
// let e = new Empleado("Juan"); 
// 💥 ERROR: ¡Alto! No puedes crear un Empleado genérico...

// B. Intento crear una hija que sí es concreta
let p = new Programador("Ana"); 
// ✅ FUNCIONA: new.target fue 'Programador', no 'Empleado'.
p.trabajar();


/*
🛑 throw new Error = El Botón de Pánico
Imagina que tu código es una fábrica funcionando.

console.log("Error"): Es como si un operario gritara "¡Oye, algo va mal!", 
pero la fábrica sigue funcionando.

throw new Error("¡Peligro!"): Es pulsar el botón rojo de emergencia. 
La fábrica (el programa) se detiene inmediatamente y muestra ese mensaje 
en rojo brillante en la consola para avisarte de que ha pasado algo grave que no debería pasar.

🧠 ¿Por qué lo usamos aquí?
En las Clases Abstractas, queremos prohibir que alguien cree un objeto "Animal" 
genérico. No queremos avisar amablemente; queremos que, si alguien lo intenta, 
el programa le diga: "¡STOP! Esto no se puede hacer" y se detenga para que el 
programador se dé cuenta del fallo al instante.

🔎 La sintaxis desglosada

- throw new Error("Mensaje del error");
  1. throw (Lanzar): Es la orden de "Lanza este error a la cara del programador".
  2. new Error(...): Crea el objeto que contiene la información del fallo (el mensaje de texto).
**/
