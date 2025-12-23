function obtenerAccionSemaforo(color){
    if (color==="VERDE"){
        return "PASAR";
    } else if (color==="AMARILLO"){
        return "CUIDADO";
    } else if (color==="ROJO"){
        return "PROHIBIDO";
    } else{
        return "COLOR NO VÁLIDO";
    }
};

let decision=obtenerAccionSemaforo("ROSA");
console.log(decision);