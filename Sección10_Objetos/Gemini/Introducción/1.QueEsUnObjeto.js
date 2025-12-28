//Imagina que quieres describir a un Alumno. 
//En lugar de tener 3 variables sueltas, creas un objeto:

let alumno = {
    nombre: "Ana",
    edad: 25,
    estaAprobado: true,
    ciudad: "Madrid"
};

/*
Anatomía del objeto:
----Se abren y cierran con llaves { }.
----Dentro van parejas de Clave: Valor (como una etiqueta y su contenido).
----Se separan por comas.

🔑 Cómo entrar y sacar información
Hay dos formas de acceder a los datos, pero la más común es usando el punto (.):
----Leer un dato: console.log(alumno.nombre); // Salida: "Ana"
----Cambiar un dato: alumno.edad = 26;
----Añadir un dato nuevo: alumno.nota = 9;

**/

//Misión: Crea una función llamada calcularNotaFinal(estudiante).
let estudiante={
    nombre: "Pedro",
    nota1:7.5,
    nota2:8.2,
    get notaPromedio(){
        return Math.ceil((this.nota1+this.nota2)/2);
    }
}

console.log(estudiante.notaPromedio);

