let cofre = [
    ["Vacío", "Trampa", "Vacío"],
    ["Vacío", "Tesoro", "Trampa"],
    ["Trampa", "Vacío", "Vacío"]
];

for(let f=0;f<cofre.length;f++){
    for (let c=0;c<cofre[f].length;c++){
        if(cofre[f][c]==="Tesoro"){
            console.log(`¡Tesoro encontrado en la posición [${f}][${c}]`);
        } else if(cofre[f][c]==="Trampa"){
            console.log(`¡Cuidado, trampa en la posición [${f}][${c}]`);
        }
    }
}