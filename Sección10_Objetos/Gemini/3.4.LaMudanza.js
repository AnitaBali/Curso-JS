let casa = {
    direccion: "Calle Mayor 1",
    habitaciones: 3,
    jardin: true
};

casa.habitaciones=4;
delete casa.jardin;

console.log(casa);
