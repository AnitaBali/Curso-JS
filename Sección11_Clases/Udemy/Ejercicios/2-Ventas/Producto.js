class Producto{

    static contadorProductos=0;

    constructor(nombre,precio){
        this._idProducto=++Producto.contadorProductos;
        this._nombre=nombre;
        this._precio=precio;
    }

    set nombre(valor){
        this._nombre=valor;
    }

    get nombre(){
        return this._nombre;
    }

    set precio(valor){
        this._precio=valor;
    }

    get precio(){
        return this._precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    toString(){
        return `ID: ${this._idProducto} | Nombre producto: ${this._nombre} | Precio: $${this._precio}`;
    }

}

class Orden{

    static contadorOrdenes=0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._productos=[];
        //this._contadorProductosAgregados=0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length< Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }else{
            console.log("No se pueden agregar más productos.")
        }
    }

    calcularTotal(){
        let totalVenta=0;
        for(let producto of this._productos){
            totalVenta+=producto.precio;
        }
        
        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden="";
        for(let producto of this._productos){
            productoOrden+= '\n{'+ producto.toString() + "}";
        }

        console.log(`Orden: ${this._idOrden} | Total: $${this.calcularTotal()} | Productos: ${productoOrden}`);
    }
}

let producto1=new Producto("Falda",30);
let producto2=new Producto("Vestido",50);
let producto3=new Producto("Jersey",43);
let producto4=new Producto("Sudadera",70);
let producto5=new Producto("Abrigo",135);
let producto6=new Producto("Sombrero",20);
let producto7=new Producto("Gafas",150);

let orden1=new Orden();
let orden2=new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto6);

orden1.mostrarOrden();
orden2.mostrarOrden();

