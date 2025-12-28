let usuario = {
    // Si la clave tiene espacios, TIENE que ir entre comillas
    "nombre completo": "Ana García" 
};

//console.log(usuario.nombre completo); // ❌ Esto da ERROR de sintaxis
console.log(usuario["nombre completo"]); // ✅ Esto funciona perfecto