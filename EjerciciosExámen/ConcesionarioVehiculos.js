class Vehiculo{

    constructor(marca,precio) {
        this.marca=marca;
        this.precio=precio;
    }

    set marca(valor){
        this._marca=valor;
    }

    get marca(){
        return this._marca;
    }

    set precio(valor){
        if(valor<0){
            this._precio=0;
        } else{
            this._precio=valor;
        }
    }

    get precio(){
        return this._precio;
    }
}

class Coche extends Vehiculo{

    constructor(marca,precio,puertas){
        super(marca,precio);
        this._puertas=puertas;
    }

    describir(){
        return `Coche ${this.marca} de ${this._puertas} puertas. Precio: ${this.precio}euros.`;
    }
}

class Moto extends Vehiculo{

    constructor(marca,precio,cilindrada){
        super(marca,precio);
        this._cilindrada=cilindrada;
    }

    describir(){
        return `Moto ${this.marca} de ${this._cilindrada} cc. Precio: ${this.precio} euros.`;
    }
}

let stock=[
    new Coche("Toyota",15000, 5),
    new Moto("Yamaha",-500,600),
    new Coche("Ferrari",200000,3)
];

stock.forEach(function(vehiculo){
    if(vehiculo instanceof Coche && vehiculo.precio>50000){
        console.log("¡LUJO!: " + vehiculo.describir());
    } else if(vehiculo instanceof Moto){
        console.log("MOTOCILCETA: " + vehiculo.marca + "(" + vehiculo.precio + ")")
    }
});


