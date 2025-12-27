function contieneSpam(frase){
    let comprobar=frase.includes("oferta")||frase.includes("ganador");
    return comprobar;
}

texto="Hoy hay oferta de churros.";
texto2="Eres el ganador del juego.";
texto3="Es sabado";

console.log(contieneSpam(texto));
console.log(contieneSpam(texto2));
console.log(contieneSpam(texto3));