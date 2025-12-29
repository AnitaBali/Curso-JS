let tecnico={
    id:"T-800"
};

function incidencia(usuario,problema){
    return `El técnico con id ${this.id} esta atendiendo a ${usuario}, por problema: ${problema}.`;
}

console.log(incidencia.apply(tecnico,["Ana","el gato no ha comido"]));