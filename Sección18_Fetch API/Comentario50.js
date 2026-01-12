const obtenerComentario= async () =>{
    try{
        const respuesta=await fetch('https://jsonplaceholder.typicode.com/comments');
        const datos=await respuesta.json();

        console.log(`El comentario 50 lo escribió ${datos[49].name.toUpperCase()} y su contacto es ${datos[49].email}`);
        



    }catch(e){
        console.log("error");
    }
};

obtenerComentario();