class Instrumento{
    constructor(nombreInstrumento){
        this._nombre=nombreInstrumento;
    }

    tocar(){
        return "Haciendo música...";
    }
}

class Guitarra extends Instrumento{
    constructor(nombreInstrumento){
        super(nombreInstrumento);
    }

    tocar(){
        return "Rasgueando cuerdas...";
    }
}

class Tambor extends Instrumento{
    constructor(nombreInstrumento){
        super(nombreInstrumento);
    }

    tocar(){
        return "Marcando el ritmo con baquetas...";
    }
}

miLista=[
    new Instrumento("Piano"),
    new Guitarra("Lola"),
    new Tambor("Coco")
];

miLista.forEach(function(instrumento){
    console.log(`Instrumento: ${instrumento._nombre} | ${instrumento.tocar()} `)
});
