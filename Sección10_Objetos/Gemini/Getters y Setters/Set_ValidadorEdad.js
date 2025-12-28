let usuario={
    edad:20,

    set nuevaEdad(valor){
        if(valor>0 && valor<120){
            this.edad=valor;
        } else{
            console.log("Edad no válida");
        }
    }
}

usuario.nuevaEdad=45;
console.log(usuario.edad);
usuario.nuevaEdad=145;