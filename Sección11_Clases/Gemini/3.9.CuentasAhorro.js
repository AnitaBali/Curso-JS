class Cuenta{

    constructor(titular,saldoInicial){
        this._titular=titular;
        this.saldo=saldoInicial;
    }

    set saldo(valor){
        if(valor<0){
            this._saldo=0;
        }else{
            this._saldo=valor;
        }
    }

    get saldo(){
        return this._saldo + "$";
    }

    estado(){
        return `Titular: ${this._titular} - Saldo: ${this.saldo}`;
    }
}

class CuentaAhorro extends Cuenta{

    constructor(titular,saldoInicial,interes){
        super(titular,saldoInicial);
        this._interes=interes;
    }

    mostrarTodo(){
        return super.estado() + " | Interés: " + this._interes + "%";
    }
}

let miCuenta=new CuentaAhorro("Ana García", 1500000, 2);
console.log(miCuenta.mostrarTodo());