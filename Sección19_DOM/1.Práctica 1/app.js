// 1. Seleccionamos los elementos
const boton = document.querySelector('#mi-boton');
const nombreH2 = document.querySelector('#nombre-usuario');
const caja = document.querySelector('#caja-usuario');

// 2. Escuchamos el evento
boton.addEventListener('click', () => {
    // 3. Cambiamos cosas en el DOM
    nombreH2.textContent = "¡Hola! Estoy vivo";
    caja.style.display = "block";
    caja.style.backgroundColor = "#e1f5fe";
});