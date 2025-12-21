let alumnos=["Ana", "Luis", "Pedro", "Martina", "Jorge"];
let nombreABuscar="Borja";
let encontrado=false;

for(let i=0;i<alumnos.length;i++){
    if(alumnos[i]===nombreABuscar){
        encontrado=true;
        break;
    }
}

if(encontrado){
    console.log("Alumno localizado.");
}else{
    console.log("No se encuentra en la lista.");
}