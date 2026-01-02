class Producto{

    constructor(nombre,precio){
        this._nombre=nombre;
        this._precio=precio;
    }

    describir(){
        return `Articulo: ${this._nombre} - Precio: ${this._precio} euros.`;
    }
}

class Ropa extends Producto{

    constructor(nombre,precio,talla,material){
        super(nombre,precio);
        this.talla=talla;
        this.material=material;
    }

    mostrarDetalle(){
        return this.describir()+ `(Talla: ${this.talla}, Tela: ${this.material})`;
    }
}

let prenda1=new Ropa("camiseta",30.99,"S","Algodón");
console.log(prenda1.describir());
console.log(prenda1.mostrarDetalle());