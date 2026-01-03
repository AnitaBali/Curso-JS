class Heroe{

    constructor(nombre,nivel) {
        this._nombre=nombre;
        this._nivel=nivel;
    }

    static compararNivel(h1,h2){
        if(h1._nivel > h2._nivel){
            return `El héroe más fuerte es ${h1._nombre}`;
        } else if (h1._nivel < h2._nivel){
            return `El héroe más fuerte es ${h2._nombre}`;
        } else{
            return `Tienen el mismo nivel`;
        }
    }
}

let heroe1=new Heroe("Thor",95);
let heroe2=new Heroe("Iron Man",95);

console.log(Heroe.compararNivel(heroe1,heroe2));


/*
🎓 Resumen Maestro de Métodos Estáticos
Para que nunca se te olvide, aquí tienes los tres pilares de lo que has aprendido hoy:

    - Pertenencia: El método compararNivel le pertenece a la "enciclopedia" de 
      Héroes (Heroe), no a Thor ni a Iron Man individualmente.

    - Llamada Directa: Usas Heroe.compararNivel(...). Si intentaras hacer 
      heroe1.compararNivel(...), JavaScript te daría un error porque los objetos 
      no "ven" los métodos estáticos.

    - Parámetros: Como el método estático está "fuera" de los objetos, 
      necesita que le pases a quién quieres comparar (h1 y h2).
**/