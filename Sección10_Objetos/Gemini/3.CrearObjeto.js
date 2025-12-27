//1. Literales (La forma manual)
//Es cuando creas el objeto usando llaves {}. Es la forma más rápida y común.
let heroe = {
    nombre: "Batman",
    ciudad: "Gotham"
};

//2. Acceso: El Punto (.) vs Los Corchetes ([])
//----El Punto (.nombre): Es el más cómodo.Lo usas cuando sabes exactamente cómo se llama la propiedad.
//----Los Corchetes (["nombre"]): Son obligatorios si el nombre 
// de la propiedad tiene espacios (ej: "nombre real") o si el nombre está guardado en una variable.

//3. Agregar y Eliminar
//Los objetos son dinámicos; no están "cerrados".
//----Agregar/Modificar: Simplemente asignas un valor: objeto.nuevaPropiedad = "valor";
//----Eliminar: Usas la palabra reservada delete: delete objeto.propiedadVieja;