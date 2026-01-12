const obtenerAlbum= async() =>{
    try{
        const respuesta=await fetch('https://jsonplaceholder.typicode.com/albums');
        const datos=await respuesta.json();

        console.log("Décimo albúm: "+datos[9].title);
        console.log("Décimo albúm_ID USUARIO: "+datos[9].userId);




    }catch(error){
        console.log("Error");
    }
}

obtenerAlbum();