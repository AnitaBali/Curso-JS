let prenda={
    tipo:"camiseta",
    talla:"L",

    get etiqueta(){
        let tipoMay=this.tipo[0].toUpperCase()+this.tipo.slice(1);
        return tipoMay + " - Talla " + this.talla;  
    }
}

console.log(prenda.etiqueta);