class Edificio{

    constructor(direccion) {
        this._direccion=direccion;
    }

    presentar(){
        return "Edificio situado en " + this._direccion;
    }
}

class Hotel extends Edificio{

    constructor(direccion, estrellas){
        super(direccion);
        this.estrellas=estrellas;
    }

    set estrellas(valor){
        if(valor>5){
            this._estrellas=5;
        } else if(valor<1){
            this._estrellas=1;
        } else{
            this._estrellas=valor;
        }
    }

    get estrellas(){
        return this._estrellas;
    }

    infoHotel(){
        return super.presentar() + " Categoría: " + this.estrellas + " estrellas.";
    }
}

let hotelLujo = new Hotel("Calle Gran Vía 1", 7); // Le ponemos 7 estrellas (imposible)
console.log(hotelLujo.infoHotel());