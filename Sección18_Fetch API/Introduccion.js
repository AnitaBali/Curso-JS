/*
1. ¿Qué es y de dónde surge? 📜
Antiguamente, para actualizar datos en una web sin recargar la página 
(como cuando ves que llega un mensaje nuevo en WhatsApp Web), 
se usaba un objeto llamado XMLHttpRequest. Era un código muy largo, 
difícil de leer y propenso a errores.

En 2015, con la llegada de los estándares modernos de JavaScript (ES6), 
surgió la Fetch API. Se creó para ser una alternativa moderna, basada en Promesas, 
que permitiera hacer peticiones HTTP de forma sencilla y limpia.

2. ¿Qué hace exactamente? 🤖
Su función es actuar como un puente entre tu navegador y un servidor.
    -> Tú le das una dirección (URL).
    -> Ella va a esa dirección, pide información (o la envía).
    -> Te devuelve una Promesa con la respuesta del servidor.

3. ¿Cuándo y cuánto se usa? 🌍
¿Cuándo? 
Siempre que necesites datos que no tienes en tu código local: 
consultar el clima, leer noticias, validar un login, guardar un comentario 
en una base de datos o consultar el precio de una criptomoneda.

¿Cuánto? 
Es el pan de cada día. El 99% de las aplicaciones modernas 
(Instagram, Netflix, Spotify) dependen de Fetch (o librerías basadas en Fetch) 
para funcionar.

4. ¿Cómo funciona? (Los Tipos de Petición) 🛠️
Aunque hoy solo probaremos "pedir" datos, Fetch puede hacer varias cosas según el Método HTTP que uses:

Método          Qué hace                             Ejemplo real
GET             Pedir información                    Ver tu muro de Facebook.
POST            Enviar información nueva             Crear una cuenta o publicar un tuit.
PUT/PATCH       Actualizar algo que ya existe        Cambiar tu foto de perfil.
DELETE          Borrar algo                          Eliminar una foto de tu galería.

5. Contenido de la respuesta: El objeto Response 📦
Cuando Fetch vuelve del servidor, no te trae los datos directamente. 
Te trae un "paquete" (el objeto Response) que contiene:
---> Status: Un número que indica cómo fue la cosa. (Ej: 200 es OK, 404 es que no lo encontró).
---> OK: Un valor booleano (true/false) que te dice si la petición tuvo éxito.
---> Body: Los datos reales, pero vienen "codificados". Por eso usamos .json() para desempaquetarlos.

6. La importancia de conocerlo 💡
Sin Fetch, tu conocimiento de JavaScript estaría limitado a cosas que solo pasan 
en tu ordenador. Con Fetch:
-----> Puedes consumir APIs Públicas (Google Maps, OpenWeather, Marvel API).
-----> Puedes trabajar con Bases de Datos.
-----> Te conviertes en una programadora capaz de crear aplicaciones que 
       interactúan con el mundo en tiempo real.

7. JSON: El idioma de internet 🔤
Fetch casi siempre trabaja con JSON (JavaScript Object Notation). 
Es un formato de texto que se parece muchísimo a los objetos de JavaScript 
que ya estudiaste en la Sección 10. Por eso fue tan importante que aprendieras 
objetos antes que esto.

¿Te ha quedado claro el panorama general? Es como si Fetch fuera el repartidor de 
Amazon: él va al almacén (Servidor), comprueba si el paquete está disponible (Status 200) 
y te lo entrega en la puerta (Response). Tú solo tienes que abrir la caja (JSON) y usar lo que hay dentro.

*/


const consultarUsuario = async () => {
    try {
        // Línea A: La petición
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/5');

        // Línea B: La conversión
        const datos = await respuesta.json();

        // Línea C: El uso de datos
        console.log("Nombre del usuario:", datos.name);
        console.log("Ciudad:", datos.address.city);

    } catch (error) {
        // Línea D: Gestión de errores
        console.error("Hubo un fallo:", error);
    }
};

consultarUsuario();

/*
Explicación Línea por Línea
Línea A: const respuesta = await fetch(URL);
--------fetch(URL): Envía la solicitud al servidor. Es como llamar por teléfono.
--------await: JavaScript se detiene aquí. No pasará a la siguiente línea hasta que el 
        servidor responda (esto puede tardar milisegundos o segundos).
--------const respuesta: Aquí guardamos el objeto Response. Ojo: este objeto todavía 
        no contiene los datos legibles, contiene la "caja" con la etiqueta de envío (status, headers, etc.).

Línea B: const datos = await respuesta.json();
-------.json(): Es un método que lee el cuerpo de la respuesta y lo transforma de 
       "formato texto de internet" a un objeto de JavaScript que puedes manipular.
-------await: ¡Muy importante! La conversión a JSON también es un proceso asíncrono 
       (tarda un poquito), así que también necesita un await.
-------const datos: Ahora sí, aquí tienes el objeto listo para usar (con sus llaves y valores).

Línea C: console.log(datos.name);
Como datos ya es un objeto normal, accedes a sus propiedades usando el punto (.),
tal como aprendiste en la Sección 10.

Línea D: catch (error) { ... }
Si la URL está mal escrita, o no tienes internet, el código saltará directamente aquí. 
Es tu red de seguridad.
*/