let mascota={
    tipo:"perro",
    nombre:"rufo",
    edad:5,

    saludar:function(){
        let nombreInicial=this.nombre[0].toUpperCase()+this.nombre.slice(1);
        return "Hola, soy un " + this.tipo + ", me llamo " + nombreInicial + " y tengo " + this.edad + " años."    }
}

console.log(mascota.saludar());