function contarPasos(n){
    //Caso base, cero
    if(n===0){
        return "Llegué!";
    }
    //Caso recursivo
    console.log(`Paso n°: ${n}`);
    return contarPasos(n-1);
}

let caminata=contarPasos(7);
console.log(caminata)