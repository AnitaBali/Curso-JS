let casa1 = {
    direccion: "Calle Mayor 1",
    propietario: "Ana",
    anunciar: function(precio) {
        return `La casa de ${this.propietario} en ${this.direccion} vale ${precio}€`;
    }
};

let casa2 = {
    direccion: "Calle Real 5",
    propietario: "Pedro"
};

// RETO: Haz que casa2 use el método 'anunciar' de casa1.
// Pista: En lugar de 'funcion.call(...)', usa 'objeto1.metodo.call(objeto2, ...)'
console.log(casa1.anunciar.call(casa2,300000));