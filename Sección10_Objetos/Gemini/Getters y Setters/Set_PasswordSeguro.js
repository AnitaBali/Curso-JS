let cuenta={
    password:"1234",

    set cambiarPassword(nuevo){
        if(nuevo.length>=8){
            this.password=nuevo;
        }else{
            console.log("Debe tener 8 carácteres o más.");
        }
    }
}

cuenta.cambiarPassword="12345690";
console.log(cuenta.password);


