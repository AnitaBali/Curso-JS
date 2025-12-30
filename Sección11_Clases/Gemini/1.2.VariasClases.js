class Fichaje{

    constructor(idEmpleado, horaEntrada){
        this.idEmpleado=idEmpleado;
        this.horaEntrada=horaEntrada;
    }

    info(){
        return `El empleado ${this.idEmpleado} entró a las ${this.horaEntrada}`;
    }
}

let fichaje1=new Fichaje("a21234","10:00");
console.log(fichaje1.info());

class Empresa{

    constructor(nombre,ubicacion){
        this.nombre=nombre;
        this.ubicacion=ubicacion;
    }

    sede(){
        return `Sede central de ${this.nombre} en ${this.ubicacion}.`;
    }
}

let empresa1=new Empresa("El Valle", "Valencia");
console.log(empresa1.sede());

class Programador{

    constructor(nombre,lenguajeFavorito){
        this.nombre=nombre;
        this.lenguajeFavorito=lenguajeFavorito;
    }

    programar(){
        return `${this.nombre} está escribiendo código en ${this.lenguajeFavorito}.`;
    }
}

let programador1=new Programador("Anita","JavaScript");
console.log(programador1.programar());

class Vacaciones{

    constructor(nombreEmpleado,diasRestantes){
        this.nombreEmpleado=nombreEmpleado;
        this.diasRestanes=diasRestantes;
    }

    quedan(){
        return `${this.nombreEmpleado} te quedan ${this.diasRestantes} días de vacaciones.`
    }
}

let vacaciones1= new Vacaciones("Anita", 30);
console.log(vacaciones1.quedan());