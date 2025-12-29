let jugador={
    alias: "Sniper",
    balas:10
};

function disparar(){
    this.balas--;
    return `${this.alias} disparó. Quedan ${this.balas} balas.`;
};

let click=disparar.bind(jugador);
console.log(click());
console.log(click());
console.log(click());
