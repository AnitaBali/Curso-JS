let cuenta={
    saldo:100,

    ingresar:function(cantidad){
        this.saldo+=cantidad;
        return this.saldo;
    },
    retirar:function(cantidad){
        if (this.saldo<=0 || this.saldo<cantidad){
            return "No tienes saldo suficiente.";
        }else{
              this.saldo-=cantidad;
            return this.saldo;
        }
    }
}

console.log(cuenta.ingresar(200));
console.log(cuenta.saldo);
console.log(cuenta.ingresar(100));
console.log(cuenta.saldo);
console.log(cuenta.retirar(500));
console.log(cuenta.saldo);