let coche={
    encendido:true,

    estadoMotor: function(){
        if(this.encendido){
           return  "El motor esta encendido";
        }else{
            return "El motor esta apagado"
        }
    }
}

console.log(coche.estadoMotor());