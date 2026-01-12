/*
¿Qué es el DOM?
Imagina que tu página HTML es un árbol genealógico. El DOM es la herramienta que 
permite a JavaScript "trepar" por ese árbol para cambiar las cosas:
      - Cambiar un texto.
      - Cambiar un color.
      - Hacer que aparezca una imagen cuando alguien pulsa un botón.

🌳 1. ¿Qué es el DOM realmente?
DOM significa Document Object Model (Modelo de Objetos del Documento).

Cuando el navegador lee tu archivo HTML, no lo ve simplemente como texto. 
Lo transforma en un árbol de objetos.
      - Document: Es el archivo entero (la raíz).
      - Object: Cada etiqueta (h1, p, button, div) se convierte en un objeto de 
        JavaScript con propiedades que podemos cambiar.
      - Model: Es la estructura de "padres e hijos".

🛠️ 2. Las 3 "A" de la manipulación del DOM
Para trabajar con el DOM, siempre seguirás este ciclo:

A. Acceder (Seleccionar)
Antes de cambiar algo, tienes que encontrarlo. JavaScript tiene un "radar" muy potente:
      - document.querySelector('#id'): Busca por ID (el más usado).
      - document.querySelector('.clase'): Busca por clase.
      - document.querySelector('h1'): Busca por nombre de etiqueta.

B. Alterar (Cambiar)
Una vez que tienes el elemento "atrapado" en una variable, puedes cambiarlo:
      - .textContent: Cambia el texto de dentro.
      - .style.color: Cambia el color (CSS).
      - .src: Cambia la fuente de una imagen (¡muy útil para lo que hicimos hoy con los perritos!).

C. Atender (Eventos)
Le decimos al elemento que esté atento a lo que hace el usuario:
      - .addEventListener('click', funcion): "Cuando hagan click, haz esto".


🧬 3. La conexión lógica
La magia ocurre cuando unes Fetch con el DOM. Mira este esquema mental:
     - Evento: El usuario hace click en un botón.
     - Lógica (Fetch): JS va a la API, trae un dato (ej: "Ditto").
     - DOM: JS busca un párrafo vacío en el HTML y le escribe "Ditto" dentro.



*/