let usuario={
    nombre:"ana",
    apellido:"garcia",
    
    obtenerNombreCompleto: function(){
      // Primero, comprobamos si el nombre existe para evitar errores
        if (this.nombre.length > 0 && this.apellido.length > 0) {
            
            let nombreInicial = this.nombre[0].toUpperCase() + this.nombre.slice(1);
            let apellidoInicial = this.apellido[0].toUpperCase() + this.apellido.slice(1);
            
            return nombreInicial + " " + apellidoInicial;
        } else {
            return "Datos incompletos";
        }
    }
}

console.log(usuario.obtenerNombreCompleto());