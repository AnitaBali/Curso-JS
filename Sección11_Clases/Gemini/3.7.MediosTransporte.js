class Transporte{

    constructor(capacidad) {
        this.capacidad=capacidad;
    }

    set capacidad(valor){
        if(valor>100){
            this._capacidad=100;
        } else if(valor<1){
            this._capacidad=1;
        } else{
            this._capacidad=valor;
        }
    }

    get capacidad(){
        return this._capacidad;
    }

    anunciar(){
        return `Capacidad máxima: ${this.capacidad} pasajeros.`;
    }
}

class Avion extends Transporte{

    constructor(capacidad, aerolinea){
        super(capacidad);
        this._aerolinea=aerolinea;
    }

    volar(){
        return super.anunciar() + " - Operado por: " + this._aerolinea;
    }
}

let miVuelo = new Avion(250, "Iberia"); // Intentamos meter 250 personas
console.log(miVuelo.volar());