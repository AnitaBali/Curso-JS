function Libro(titulo, autor, paginasTotales){
    this.titulo=titulo;
    this.autor=autor;
    this.paginasTotales=paginasTotales;
    this.paginasLeidas=0;
    this.finalizado=false;
}

Libro.prototype.leer=function(cantidad){
    if(this.paginasLeidas+cantidad>=this.paginasTotales){
        this.paginasLeidas=this.paginasTotales;
        this.finalizado=true;
        console.log(`Felicidades, has terminado el libro ${this.titulo}.`);
    } else{
         this.paginasLeidas+=cantidad;
    }
}

Libro.prototype.progreso=function(){
    let calculo=(this.paginasLeidas/this.paginasTotales)*100;
    let porcentaje=calculo.toFixed(2);
    return `Has leído el ${porcentaje} % del libro ${this.titulo}.`
}

let miLibro=new Libro("Cumbres Borrascosas", "Emily Bronte", 320);
miLibro.leer(150);
miLibro.leer(169);
console.log(miLibro.progreso());

