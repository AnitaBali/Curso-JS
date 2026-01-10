const transformar = (texto,tarea) =>{
    const resultado=tarea(texto);
    console.log("Resultado: "+resultado);
}

transformar("Ana esta limpiando", t=> t.toUpperCase());
transformar("Coco esta durmiendo", t=> t.length)