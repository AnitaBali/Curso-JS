let saludarUsuario = (nombre, esVip) => {
    if(esVip){
        return "Bienvenido jefe "+ nombre + ".";
    } else{
        return "Hola " + nombre + ", bienvenido.";
    }
}

console.log(saludarUsuario("Ana", true));
console.log(saludarUsuario("Borja", false));