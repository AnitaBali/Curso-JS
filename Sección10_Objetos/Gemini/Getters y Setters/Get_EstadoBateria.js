let smartphone={
    carga:89,

    get estado(){
        if(this.carga>20){
            return "Batería OK";
        } else{
            return "Batería Baja";
        }
    }
}

console.log(smartphone.estado);