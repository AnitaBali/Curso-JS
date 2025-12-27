function sumarHasta(n) {
    // 1. Caso Base: Si n es 0, paramos
    if (n === 1) {
        return 1; 
    }
    // 2. Caso Recursivo: 
    // "El resultado es N + la suma de todos los anteriores"
    return n + sumarHasta(n - 1);
    
}

let resultado=sumarHasta(4);
console.log(resultado);