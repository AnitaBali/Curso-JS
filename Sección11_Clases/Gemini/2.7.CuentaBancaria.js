class CuentaBancaria{

    constructor(dineroInicial){
        this.saldo=dineroInicial;
    }

    set saldo(cantidad){
        if(cantidad<0){
            console.log("Aviso: saldo negativo registrado.");
            this._saldo=cantidad;
        }else if(cantidad>50000){
            console.log("Aviso: Notificar a Hacienda por ingreso alto.");
            this._saldo=cantidad;
        } else{
             this._saldo=cantidad;
        }
    }

    get saldo(){
        return `Saldo disponible: ***${this._saldo.toString().slice(-2)}`;
    }

}

let cuenta1=new CuentaBancaria(-100);
let cuenta2=new CuentaBancaria(0);
let cuenta3=new CuentaBancaria(1000);
let cuenta4=new CuentaBancaria(100000);

console.log(cuenta1.saldo);
console.log(cuenta2.saldo);
console.log(cuenta3.saldo);
console.log(cuenta4.saldo);