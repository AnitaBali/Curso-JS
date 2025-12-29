/*
🚀 Desafío Maestro de Objetos (Examen de Bloque)
Este ejercicio mezcla todo lo que hemos visto en las últimas 3 horas. Si lo sacas, 
puedes decir que dominas los Objetos en JavaScript.

Contexto: El Taller de Coches
1. Constructor: Crea una función constructora Coche(marca, modelo) 
   que tenga una propiedad enReparacion: false.
2. Prototype: Añade al prototipo de Coche un método averiar() que cambie enReparacion a true.
3. Objeto Taller: Crea un objeto literal llamado taller que tenga la propiedad 
   nombre: "Taller de Pepe" y un método reparar(precio, horas) que:
    ---Cambie this.enReparacion a false.
    ---Devuelva: "En el [this.nombre] hemos reparado tu coche por [precio]€ en [horas]h".

4. Acción:
    ---Crea un coche miCoche (Toyota Corolla).
    ---Usa el método del prototipo para averiarlo.
    ---El Reto: Usa .call() para que el miCoche use el método reparar que está 
    dentro del objeto taller. Pásale un precio de 200 y 3 horas.

**/

function Coche(marca,modelo){
    this.marca=marca;
    this.modelo=modelo;
    this.enReparacion=false;
}

Coche.prototype.averiar=function(){
    this.enReparacion=true;
}

let taller={
    nombre: "Taller Pepe",
    
    reparar: function(precio,horas){
        this.enReparacion=false;
        return `En el ${taller.nombre} hemos reparado tu coche por ${precio} euros en ${horas} horas.`;
        
     }
};

let miCoche=new Coche("Toyota", "Corola");
miCoche.averiar();
console.log(taller.reparar.call(miCoche,500,3));