class CuentaBancaria{
    constructor() {
        this.saldo=1000; 
    }

    retirar(cantidad){
       
            if(typeof cantidad !=="number"){
                throw new Error("Error: Ingrese un número válido.")
            }

             if(cantidad>this.saldo){
                throw new Error("Error: Fondos Insuficientes.");
            }

            if(cantidad>500){
                throw new Error("Error: Límite diario excedido (Max 500)");
            }

            this.saldo-=cantidad;
            return this.saldo;
    }
}

let miCuenta=new CuentaBancaria();
let movimientos=[200,600,300,500,"texto",100];

console.log("Iniciando operaciones");
movimientos.forEach(function(operacion){
    try{
        let saldoRestante=miCuenta.retirar(operacion);
        console.log("Retirada exitosa de " + operacion + ". Nuevo saldo: " + saldoRestante);
    } catch(error){
        console.log("Operación cancelada: " + error.message);
    }
});

