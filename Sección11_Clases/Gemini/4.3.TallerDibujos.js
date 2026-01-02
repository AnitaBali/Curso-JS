class Herramienta{

    constructor(color) {
        this._color=color;
    }

    dibujar(){
        return "Pintando...";
    }

}

class Lapiz extends Herramienta{

    constructor(color) {
        super(color);
    }

    dibujar(){
        return "Dibujando trazo fino de color " + this._color;
    }
}

class Pincel extends Herramienta{

    constructor(color) {
        super(color);
    }

    dibujar(){
        return "Pintando trazo grueso de color " + this._color;
    }
}

let miLista=[
    new Lapiz("rojo"),
    new Pincel("azul")
];

miLista.forEach(function(herramienta){
    console.log(herramienta.dibujar());
});