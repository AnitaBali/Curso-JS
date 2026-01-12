const traerFotoPerrito = async () => {
    try {
        // Línea A: La petición
        const respuesta = await fetch('https://dog.ceo/api/breeds/image/random');
        if(!respuesta.ok){
            throw new Error("No se pudo conectar con el servidor")
        }

        // Línea B: La conversión
        const datos = await respuesta.json();

        // Línea C: El uso de datos
        console.log("Enlace: " + datos.message);
    

    } catch (error) {
        // Línea D: Gestión de errores
        console.error("Hubo un fallo:", error);
    }
};

traerFotoPerrito();
