const mostrarTitulo= async () => {

    const respuesta=await fetch('https://jsonplaceholder.typicode.com/posts');
    const datos=await respuesta.json();

    console.log("Título tercera publicación: " + datos[2].title);
    console.log("Cuerpo tercera publicación: " + datos[2].body)

}

mostrarTitulo();