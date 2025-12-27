function tirarDado(){
    let aleatorio=Math.floor(Math.random()*6)+1;
    return aleatorio;
}

let jugada=tirarDado();
console.log(jugada);