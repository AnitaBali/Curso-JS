//🎬 El Gran Reto del Cine (Parte 1: La Estructura y el Filtro)
//El matiz a practicar: El Setter que limpia datos y el Constructor.

class Contenido{
    constructor(titulo,calificacion){
       this._titulo=titulo;
       this.calificacion=calificacion; 
    }

    set calificacion(valor){
        if(valor>10){
            this._calificacion=10;
        }else if(valor<0){
            this._calificacion=0;
        } else{
            this._calificacion=valor;
        }
    }

    get calificacion()
    {
        return this._calificacion;
    }

    reproducir(){
        return "Reproduciendo contenido...";
    }

}

class Pelicula extends Contenido{
    constructor(titulo,calificacion,duracion){
        super(titulo,calificacion);
        this._duracion=duracion;
    }

    reproducir(){
        return `Reproduciendo película: ${this._titulo} (${this._duracion} min)`;
    }
}

class Serie extends Contenido{
    constructor(titulo,calificacion,episodios){
        super(titulo,calificacion);
        this._episodios=episodios;
    }

    reproducir(){
        return `Reproduciendo serie: ${this._titulo} (${this._episodios} episodios)`;
    }
}

let miLista=[
    new Contenido("Big Fish",12),
    new Pelicula("Orgullo y Prejuicio",10,120)
];

let cartelera=[
    new Pelicula("Ocean Eleven",8,150),
    new Serie("Stranger Things",4,50),
    new Pelicula("Sonora",11,132)
];

miLista.forEach(function(contenido){
    console.log(contenido.reproducir())
});

cartelera.forEach(function(contenido){
    if(contenido.calificacion>5){
        console.log(contenido.reproducir());
    }
});

cartelera.forEach(function(contenido){
    if(contenido instanceof Serie){
        console.log("SERIE RECOMENDADA: " + contenido._titulo);
    } else if(contenido instanceof Pelicula && contenido.calificacion>7){
        console.log("PELI TOP: " + contenido.reproducir());
    }
})