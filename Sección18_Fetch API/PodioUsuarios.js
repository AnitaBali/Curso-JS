//📜 La regla de los Arrays en Fetch:
//Cuando el servidor te envía una lista (un Array), 
//datos ya no es un objeto, es una "fila de cajas". 
//Para entrar en una, primero eliges el número de la caja con [indice] 
//y luego pones el punto . para ver qué hay dentro.

const mostrarUsuario = async () =>{

    const respuesta= await fetch('https://jsonplaceholder.typicode.com/users');
    const datos=await respuesta.json();

    console.log("Primer usuario lista: " + datos[0].name);
    console.log("Email segundo usuario: "+ datos[1].email);
}

mostrarUsuario();