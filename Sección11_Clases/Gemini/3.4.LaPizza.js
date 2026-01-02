class Comida{

    constructor(nombreComida) {
        this.tipo=nombreComida;
    }

    set tipo(valor){
        if(valor===""){
            this._tipo="Plato Genérico";
        }else{
            this._tipo=valor;
        }
    }

    get tipo(){
        return `${this._tipo.toUpperCase()}`;
    }

    preparar(){
        return "Cocinando " + this.tipo;
    }
}

class Pizza extends Comida{

    constructor(nombreComida, ingredientes){

        super(nombreComida);
        this._ingredientes=ingredientes;
    }

    servir(){
        return super.preparar() + " con los ingredientes: " + this._ingredientes;
    }

}

let miPizza = new Pizza("Pizza Margarita", "Tomate y Queso");
console.log(miPizza.servir()); 
// Debería salir: "Cocinando PIZZA MARGARITA... con los ingredientes: Tomate y Queso"

