class Producto{

    constructor(nombre,precio) {
        this._nombre=nombre;
        this._precio=precio;
    }

    static elMasCaro(p1,p2){
        if(p1._precio>p2._precio){
            return "El producto más caro es " + p1._nombre;
        } else if(p1._precio<p2._precio){
            return "El producto más caro es " + p2._nombre;
        } else{
            return "Tienen el mismo precio"
        }
    }
}

// Ejemplo de cómo deberías probarlo al final:
let prod1 = new Producto("Ratón", 60);
let prod2 = new Producto("Teclado", 50);
console.log(Producto.elMasCaro(prod1, prod2));

/*
🎓 Lo que has aprendido hoy sobre los static:
    1- Son utilidades de la clase: No necesitas new para usarlos.
    2- Actúan como árbitros: Pueden recibir objetos y compararlos 
       (como en el caso de los Productos).
    3- Son contadores globales: Pueden llevar el registro de cuántos 
       objetos se han creado (como en el caso de los Vehículos).
    4- Ahorran memoria: No se copian en cada objeto, solo existen una vez en la "fábrica".
**/