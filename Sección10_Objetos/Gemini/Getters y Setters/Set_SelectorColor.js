let configuracion={
    color:"#FFFFFF",

    set cambiarColor(nuevo){
        if(nuevo[0]==="#"){
            this.color=nuevo;
        }else{
            console.log("Formato de color hexadecimal inválido.");
        }
    }
}

configuracion.cambiarColor="#123456";
console.log(configuracion.color);
configuracion.cambiarColor="456";
console.log(configuracion.color);