const analizarFrase = frase => {
    let palabras = frase.split(" ");
    return {
        fraseOriginal: frase.toLowerCase(),
        totalPalabras: palabras.length
    };
};

console.log(analizarFrase("Aprender JavaScript es emocionante"));
// Resultado: { fraseOriginal: "aprender javascript es emocionante", totalPalabras: 4 }