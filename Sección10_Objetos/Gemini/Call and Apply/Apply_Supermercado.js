let ticket={
    tienda:"SuperMark"
};

function sumar(prod1,prod2,prod3){
    return `Ticket de ${this.tienda}: Total ${prod1+prod2+prod3} euros.`;
}

console.log(sumar.apply(ticket,[10,5,20]));