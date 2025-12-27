function limpiarYMayusculas(correo){
    let actualizar=correo.trim().toUpperCase();
    return actualizar;
};

console.log(limpiarYMayusculas( " ana@gmail.com  "));