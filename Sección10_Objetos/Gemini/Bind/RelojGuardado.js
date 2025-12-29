let reloj={
    modelo:"Casio"
};

function queModeloEs(){
    return `Es un ${this.modelo}`;
};

let verModelo=queModeloEs.bind(reloj);
console.log(verModelo());