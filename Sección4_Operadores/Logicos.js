// Operadores Logicos
let a=true;
let b=false;
let c=true;
let d=false;
console.log(a);
console.log(b);

//Operador Lógico && (and o Y)
//Regresa verdadero si ambos son True
console.log(`${a} && ${b} -> ${a&&b}`)
console.log(`${a} && ${c} -> ${a&&c}`)

//Operador Lógico || (or o O)
//Regresa verdadero si alguno de los valores es True
console.log(`${a} || ${b} -> ${a||b}`)
console.log(`${d} || ${d} -> ${b||d}`)

//Operador Not !(not o NO)
//Invierte el valor original, true pasa a false, y false pasa a true
console.log(`${a} -> ${!a}`)
console.log(`${b} -> ${!b}`)
