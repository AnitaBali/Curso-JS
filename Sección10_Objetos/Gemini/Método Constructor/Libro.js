function Libro(titulo,autor,paginas){
    this.titulo=titulo;
    this.autor=autor;
    this.paginas=paginas;
    this.paginaActual=0;

    this.leer= function(valor){
        if(this.paginaActual + valor <=this.paginas){
            this.paginaActual+=valor;
            return "Paginas leídas " + this.paginaActual;
        }else{
            this.paginaActual=this.paginas;
            return "Has terminado el libro."
        }
        
    };

    this.resumen= function(){
        let proceso=(this.paginaActual/this.paginas)*100;
        return "Has leído el " + proceso.toFixed(0)+ " % de " + this.titulo;
    }

}

let libro1=new Libro("El secreto de la asistenta", "Freida Mcfadden", 300);
let libro2=new Libro("Fuimos canciones", "Elisabet Benavent", 400);
console.log(libro1.leer(150));
console.log(libro1.leer(300));
console.log(libro1.resumen());


console.table(libro1);
console.table(libro2);