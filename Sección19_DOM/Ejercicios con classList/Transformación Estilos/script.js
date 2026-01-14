// 1. Seleccionamos los elementos
const tarjeta = document.getElementById("notificacion");
const boton = document.getElementById("btn-confirmar");

// 2. Escuchamos el evento click
boton.addEventListener("click", () => {
    
    // 3. Añadimos la clase de CSS
    tarjeta.classList.add("exito");

    // 4. Cambiamos el texto para que tenga sentido
    tarjeta.textContent = "¡Operación completada!";
});