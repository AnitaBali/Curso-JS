function Rectangulo(ancho,alto){
    this.ancho=ancho;
    this.alto=alto;
}

Rectangulo.prototype.area=function(){
    let resultado=this.ancho*this.alto;
    return `El área del rectángulo es de ${resultado}`;
}

let miRectangulo=new Rectangulo(10,5);
console.log(miRectangulo.area());