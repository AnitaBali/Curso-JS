const obtenerChiste = async () => {
    try {
        const respuesta = await fetch('https://official-joke-api.appspot.com/random_joke');
        const datos = await respuesta.json();

        // PASO 1: Mira la caja completa en la consola
        console.log("Caja completa (objeto):", datos);

        // PASO 2: Ahora mira qué nombres hay dentro de las llaves { }
        // Verás que hay algo llamado 'title' y algo llamado 'body'

        // PASO 3: Los usamos
        console.log("Configuración: " + datos.setup);
        console.log("Remate: " + datos.punchline)

    } catch (e) {
        console.log("Error");
    }
};

obtenerChiste();