let rectangulo={
    ancho:10,
    alto:5,

    calcularArea:function(){
        return this.ancho*this.alto;
    }
}

console.log(rectangulo.calcularArea());