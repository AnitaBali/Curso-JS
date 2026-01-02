class Recurso{

    constructor(titulo,codigo){
        this._titulo=titulo;
        this.codigo=codigo;
    }

    set codigo(valor){
        if(!valor.startsWith("LIB-")){
            this._codigo="LIB-0000";
        }else{
            this._codigo=valor;
        }
    }

    get codigo(){
        return this._codigo;
    }

    identificador(){
        return `Recurso: ${this._titulo} (ID: ${this.codigo})`;
    }
}

class Libro extends Recurso{

    constructor(titulo,codigo,autor){
        super(titulo,codigo);
        this._autor=autor;
    }

    detalleCompleto(){
        return super.identificador() + " - Autor: " +this._autor;
    }
}

let milibro=new Libro("El Secreto de la Asitenta", "estros12", "Freida Mcfadden");
let libroBueno = new Libro("El Quijote", "LIB-123", "Cervantes");
let libroMalo = new Libro("Moby Dick", "123-LIB", "Melville"); // Código en formato erróneo
console.log(milibro.detalleCompleto());
console.log(libroBueno.detalleCompleto());
console.log(libroMalo.detalleCompleto());