function Usuario(email,clave){
    this.email=email;
    this.clave=clave;
    this.acceso=false;

    this.login=function(emailDigitado, claveDigitada){
        if(this.email===emailDigitado && this.clave===claveDigitada){
            this.acceso=true;
            return this.acceso;
        } else{
            return this.acceso=false;
        }
    }
}

let usuario1=new Usuario("ana.gargon@outlook.com","1234" );

usuario1.login("ana.gargon@outlook.com","1234");
console.log(usuario1.acceso);

usuario1.login("ana.gargon@outlook.com","");
console.log(usuario1.acceso);