const validadUsuario = (nombre,callback) =>{
    const esValido=nombre.length>=3;
    callback(esValido);
}

validadUsuario("Jo",(resultado) =>{
    if(resultado){
        console.log("Usuario registrado con éxito.");
    }else{
        console.log("Error, el nombre debe tener al menos tres letras.");
    }
});