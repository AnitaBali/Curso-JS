let contraseña="1234";
let acceso=false;
let intentos=0;

while(!acceso){
    let prueba="1234";

    intentos+=1;
    console.log(`Intento número: ${intentos}`);

    if(contraseña===prueba){
        acceso=true;
        console.log("Acceso válido.")
    }else if (intentos===3){
        console.log("Cuenta bloqueada.");
        break;
    }

}