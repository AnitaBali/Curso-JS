const explorar = async () => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const datos = await respuesta.json();

        // PASO 1: Mira la caja completa en la consola
        console.log("Caja completa (objeto):", datos);

        // PASO 2: Ahora mira qué nombres hay dentro de las llaves { }
        // Verás que hay algo llamado 'title' y algo llamado 'body'

        // PASO 3: Los usamos
        console.log("El título es: " + datos.title);

    } catch (e) {
        console.log("Error");
    }
};

explorar();