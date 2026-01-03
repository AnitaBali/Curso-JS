class Alumno{

    static totalAlumnos=0;

    constructor(nombre) {
        this._nombre=nombre;
        Alumno.totalAlumnos++;
    }

    static mostrarContador(){
        return "Alumnos registrados: " + Alumno.totalAlumnos;
    }
}

let alumno1=new Alumno("Ana");
let alumno2=new Alumno("Ana2");
let alumno3=new Alumno("Ana3");

console.log(Alumno.mostrarContador());