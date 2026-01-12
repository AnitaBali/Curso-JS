const perfilUsuario= async () =>{
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const datos = await respuesta.json();

        console.log("Caja completa (objeto):", datos);

        console.log("Nombre usuario: " +datos.name);
        console.log("Empresa: " + datos.company.name);


    } catch (e) {
        console.log("Error");
    }
}

perfilUsuario();