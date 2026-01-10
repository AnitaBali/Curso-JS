

function sumar(a,b){
    console.log (a+b);
}

try {
    sumar(10,5);
    noExiste();

} catch (error) {
    // Aquí "desactivamos la bomba"
    console.log("¡Error atrapado! El programa sigue funcionando.");

}

console.log("Fin del ejercicio.");
