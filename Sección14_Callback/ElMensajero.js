
const mostrarMensaje = texto => console.log(texto);

const servidor = (mensaje) =>{
    let respuesta="Datos recibidos del servidor.";
    mensaje(respuesta);
}

servidor(mostrarMensaje);