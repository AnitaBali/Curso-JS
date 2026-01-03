class Envio{

    static totalIngresos=0;

    constructor(peso){
        if(new.target===Envio){
            throw new Error("Error, no puedes crear on objeto abstracto.");
        }
        this.peso=peso;
    }

    set peso(valor){
        if(valor<0){
            throw new Error("Error, el peso no puede ser negativo.");
        }else{
            this._peso=valor;
        }
    }

    get peso(){
        return this._peso;
    }

    calcularCosto(){
        throw new Error("Error, debe implementarse el método.");
    }

    static actualizarIngresos(monto){
        Envio.totalIngresos+=monto;
    }

}

class EnvioNacional extends Envio{

    constructor(peso,region){
        super(peso);
        this._region=region;
    }

    calcularCosto(){
        let resultado=this._peso*5;
        Envio.actualizarIngresos(resultado);
        return resultado;
    }


}

class EnvioInternacional extends Envio{

    constructor(peso,pais){
        super(peso);
        this._pais=pais;
    }

    calcularCosto(){
        let resultado=(this._peso*10)+20;
        Envio.actualizarIngresos(resultado);
        return resultado;
    }
    
}

let envios=[
    new EnvioNacional(10,"Madrid"),
    new EnvioInternacional(5,"Japón"),
    new EnvioNacional(2,"Barcelona")
];

envios.forEach(function(envio){
    console.log("Coste del envío: " + envio.calcularCosto() + " euros.")
});

console.log("Total recaudado: " + Envio.totalIngresos + " euros.");