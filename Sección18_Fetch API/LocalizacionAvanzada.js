const accederUsuario = async () =>{

    try{
        const respuesta=await fetch('https://jsonplaceholder.typicode.com/users');
        const datos=await respuesta.json();

        console.log("Cuarto usuario: " + datos[3].name);
        console.log("Cuarto usuario latitud: " + datos[3].address.geo.lat);


    } catch(error){
        console.log("error");
    }
}

accederUsuario();