class Heroe{
    constructor(nombre){
        this._nombre=nombre;
    }

    defender(){
        return "El heroé se protege."
    }
}

class Guerrero extends Heroe{
    constructor(nombre) {
        super(nombre);
    }

    defender(){
        return "Bloqueo con escudo de hierro."
    }
}

class Mago extends Heroe{
     constructor(nombre) {
        super(nombre);
    }

    defender(){
        return "Creando escudo de energía mágica."
    }
}

let equipo=[
    new Guerrero("Dustin"),
    new Mago("Eleven")
];

equipo.forEach(function(heroe){
    console.log(`¡Cuidado! ${heroe._nombre} se prepara: ${heroe.defender()}`)
});