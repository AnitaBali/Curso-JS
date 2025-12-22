let temperaturas=[];
let sumaTemperaturas=0;
let totalElementos=0;

for(let f=0; f<3;f++){
    let fila=[];
    for(let c=0; c<3;c++){
        let temperaturasAl=Math.floor(Math.random()*21)+15;
        fila.push(temperaturasAl);
        sumaTemperaturas+=temperaturasAl;
        totalElementos++;
    }
    temperaturas.push(fila);
}

console.table(temperaturas);
console.log(totalElementos);
console.log(sumaTemperaturas);
console.log(`La media de temperaturas es de ${sumaTemperaturas/totalElementos} grados.`);