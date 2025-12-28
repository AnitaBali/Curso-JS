let producto={
    nombre:"monitor",
    precio:200,

    precioEnDolares: function(tasaCambio){
        let resultado= this.precio*tasaCambio;
        let redondeo= resultado.toFixed(2);
        return "El " + this.nombre + " cuesta " + redondeo + " dólares.";
    }
}

console.log(producto.precioEnDolares(1.10));