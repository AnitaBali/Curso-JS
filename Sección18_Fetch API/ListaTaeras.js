const obtenerTareas= async () => {

    try{
        const respuesta=await fetch('https://jsonplaceholder.typicode.com/todos');
        const datos=await respuesta.json();

        console.log("Tarea 5: " + datos[4].title);
        console.log("Tarea 3: " + datos[2].title);
        if(datos[2].completed===false){
            console.log("Tarea 3: Incompleta");
        } else{
            console.log("Tarea 3: Completa");
        }

    } catch(error){
        console.log("Error");
    }

}

obtenerTareas();