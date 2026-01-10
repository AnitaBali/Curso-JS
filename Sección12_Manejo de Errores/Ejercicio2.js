//Validador de edad

function validadEdad(edad){
    if (edad<18){
        throw new Error("Error, es menor de edad.");
    }
}

try{
    validadEdad(15);
    console.log("Es mayor de edad." );

}catch(error){
    console.log(error.message);
}

