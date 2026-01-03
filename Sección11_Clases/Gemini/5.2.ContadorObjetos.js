class Pizza {
    // 1. Creamos una variable de la CLASE (la fábrica)
    static totalPizzas = 0;

    constructor(sabor) {
        this.sabor = sabor;
        // 2. Cada vez que se hace "new", sumamos 1 al contador de la CLASE
        Pizza.totalPizzas++;
    }

    // 3. Método estático para consultar el total
    static anunciarTotal() {
        return "Se han cocinado " + Pizza.totalPizzas + " pizzas.";
    }
}

let p1 = new Pizza("Margarita");
let p2 = new Pizza("Peperoni");

console.log(Pizza.anunciarTotal()); // "Se han cocinado 2 pizzas."