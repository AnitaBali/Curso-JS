const calcularEstadisticas = (numeros) => {
    if (numeros.length === 0) return { mayor: 0, promedio: 0 };

    let mayor = numeros[0];
    let suma = 0;

    for (let num of numeros) {
        if (num > mayor) mayor = num;
        suma += num;
    }

    return {
        mayor: mayor,
        promedio: suma / numeros.length
    };
};

console.log(calcularEstadisticas([10, 20, 30, 5, 100]));
// Resultado: { mayor: 100, promedio: 33 }